import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-color-panel',
  templateUrl: './advanced-color-panel.component.html',
  styleUrls: ['./advanced-color-panel.component.scss']
})
export class AdvancedColorPanelComponent implements OnInit {
  @Input() color;
  @Output() send = new EventEmitter();
  pureColor: string;
  panel = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }
  pointer = {
    top: 0,
    left: 0,
    color: ''
  }
  dragging: boolean = false;

  constructor() { }

  ngOnInit() {
    this.getPureColor()
    this.initPanel()
  }

  getPureColor() {
    this.pureColor = pureColorHex(this.color)
  }

  initPanel() {
    let panel = document.getElementsByClassName('advanced-color-panel')[0] as HTMLElement
    let top = panel.offsetTop
    let left = panel.offsetLeft
    let parent = panel
    while((parent = parent.offsetParent as HTMLElement)) {
      top += parent.offsetTop
      left += parent.offsetLeft
      if (parent == document.body as HTMLElement)
        break
    }
    this.panel = {
      top,
      left,
      width: panel.offsetWidth,
      height: panel.offsetHeight
    }
    // HACK: 这里计算offsetleft的时候把自己的高度也算进去了，不知道为什么
    this.panel.top -= this.panel.height
    this.pointer.left = panel.offsetWidth
  }

  mouseClick(event: MouseEvent) {
    this.pointer.left = event.clientX - this.panel.left
    this.pointer.top = event.clientY - this.panel.top
    this.getColor()
  }

  mouseDown() {
    this.dragging = true;
  }

  mouseMove(event: MouseEvent) {
    if (!this.dragging)
      return
    this.pointer.left = event.clientX - this.panel.left
    this.pointer.top = event.clientY - this.panel.top
    // Edge detection
    if (this.pointer.left < 0) {
      this.pointer.left = 0
    }
    if (this.pointer.left > this.panel.width) {
      this.pointer.left = this.panel.width
    }
    if (this.pointer.top < 0) {
      this.pointer.top = 0
    }
    if (this.pointer.top > this.panel.height) {
      this.pointer.top = this.panel.height
    }
    this.getColor()
  }

  getColor() {
    this.color = mapInPanel(this.pureColor, this.pointer.left/this.panel.width, this.pointer.top/this.panel.height)
    this.send.emit(this.color)
  }

  mouseUp() {
    this.dragging = false;
  }
}

// ----------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------

/**
 * Map pure(top right) color to the pointed color
 *
 * @param   {string} hex
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @return  {object}          rgb
 */
function mapInPanel(hex, x, y) {
  var rgb = hexToRgb(hex)
  // add white
  rgb = rgb.map(c => {
    return c + (255 - c) * (1 - x)
  })
  // add black
  rgb = rgb.map(c => {
    return Math.round(c * (1 - y))
  })
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

/**
 * Get Pure Color
 *
 * @param   {string} hex
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @return  {object}          rgb
 */
function pureColorHex(hex) {
  var rgb = hexToRgb(hex)
  // remove white
  rgb = rgb.map(c => {
    return c - Math.min(...rgb)
  })
  // remove black
  rgb = rgb.map(c => {
    return Math.round(c * 250 / Math.max(...rgb))
  })
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null
}