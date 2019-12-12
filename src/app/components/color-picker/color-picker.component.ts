import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() recentlySelected: string[];
  // @Output() select: new EventEmitter();
  hsla = {
    hue: 290,
    saturation: 1,
    luminance: 0.5,
    opacity: 1
  }
  panel = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }
  pointer = {
    top: 20,
    left: 20,
    color: ''
  }
  dragging: boolean = false;
  preColor = 'rgba(255,255,255,1)';
  recentColor = 'rgba(255,255,255,1)';
  value = 'hah'

  constructor() { }

  ngOnInit() {
    this.initColors()
    this.getPanelPosition()
    this.checkRecentlySelected()
  }

  initColors() {
    if (this.recentlySelected.length) {
      this.preColor = this.recentlySelected[0]
      this.preColor = this.recentlySelected[0]
    }
  }

  getPanelPosition() {
    let panel = document.getElementById('panel') as HTMLElement
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
    this.getPointerColor()
    this.recentColor = this.pointer.color
    console.log(this.pointer);
  }
  
  getPointerColor() {
    let hsla = this.hsla    
    let rgb = hslToRgb(hsla.hue / 360, hsla.saturation, hsla.luminance)
    // console.log(rgb);
    rgb = mapInPanel(rgb, this.pointer.left/this.panel.width, this.pointer.top/this.panel.height)
    this.pointer.color = 'rgba(' + Object.values(rgb).join(',') + ',' + this.hsla.opacity + ')'
  }

  mouseUp() {
    this.dragging = false;
  }

  checkRecentlySelected() {
    this.recentlySelected = this.recentlySelected.slice(0, 10)
  }

  save() {
    this.preColor = this.recentColor
    this.recentlySelected.unshift(this.recentColor)
    this.checkRecentlySelected()
  }
}

// ----------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------

function getRandomRgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

/**
 * Map topright color to the pointer color
 *
 * @param   {Array} rgb
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @param   {number}  l       The lightness
 * @return  {Array}           rgb
 */
function mapInPanel(rgb, x, y) {
  // add white
  rgb = rgb.map(c => {
    return c + (255 - c) * (1 - x)
  })
  // add black
  rgb = rgb.map(c => {
    return Math.round(c * (1 - y))
  })
  return rgb
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      var hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}