import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { colorToPureColor, getColorByPosition, getColorPosition } from '../../../shared/utils/color';

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
    this.pureColor = colorToPureColor(this.color)
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
    // init pointer position
    var position = getColorPosition(this.color)
    this.pointer.left = position.x * this.panel.width
    this.pointer.top = position.y * this.panel.height
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
    this.color = getColorByPosition(this.pureColor, this.pointer.left/this.panel.width, this.pointer.top/this.panel.height)
    this.send.emit(this.color)
  }

  mouseUp() {
    this.dragging = false;
  }
}
