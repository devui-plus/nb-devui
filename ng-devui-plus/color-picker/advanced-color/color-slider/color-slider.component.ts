import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { colorToPureColor, getColorByPointerPositionInSlider, getPointerPositionInSliderByColor } from '../../../shared/utils/color';

@Component({
  selector: 'd-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements OnInit {
  @Input() color;
  @Output() send = new EventEmitter();
  pureColor: string;
  panel = {
    top: 0,
    height: 0
  }
  pointer = {
    top: 0,
    color: '#fff'
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
    let panel = document.getElementsByClassName('color-slider')[0] as HTMLElement
    let top = panel.offsetTop
    let parent = panel
    while((parent = parent.offsetParent as HTMLElement)) {
      top += parent.offsetTop
      if (parent == document.body as HTMLElement)
        break
    }
    this.panel = {
      top,
      height: panel.offsetHeight
    }
    // HACK: 这里计算offsetleft的时候把自己的高度也算进去了，不知道为什么
    this.panel.top -= this.panel.height
    // init pointer position
    var position = getPointerPositionInSliderByColor(this.pureColor)
    this.pointer.top = position * this.panel.height
  }

  mouseClick(event: MouseEvent) {
    this.pointer.top = event.clientY - this.panel.top
    this.getColor()
  }

  mouseDown() {
    this.dragging = true;
  }

  mouseMove(event: MouseEvent) {
    if (!this.dragging)
      return
    this.pointer.top = event.clientY - this.panel.top
    // Edge detection
    if (this.pointer.top < 0) {
      this.pointer.top = 0
    }
    if (this.pointer.top > this.panel.height) {
      this.pointer.top = this.panel.height
    }
    this.getColor()
  }

  getColor() {
    this.pureColor = getColorByPointerPositionInSlider(this.pointer.top/this.panel.height)
    this.send.emit(this.pureColor)
  }

  mouseUp() {
    this.dragging = false;
  }
}
