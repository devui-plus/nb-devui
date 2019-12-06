import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() recentlySelected: string[];
  // @Output() select: new EventEmitter();

  selected = "rgba(255,255,255,1)"
  preColor = 'rgba(255,255,255,1)';
  recentColor = 'rgba(255,255,255,1)';

  constructor() { }

  ngOnInit() {
    this.initColors()
    this.checkRecentlySelected()
  }

  initColors() {
    if (this.recentlySelected.length) {
      this.preColor = this.recentlySelected[0]
      this.preColor = this.recentlySelected[0]
    }
  }

  getRandomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  checkRecentlySelected() {
    this.recentlySelected = this.recentlySelected.slice(0, 10)
  }

  colorPanelSelect() {
    this.selected = this.getRandomRgba()
    this.recentColor = this.selected
  }

  save() {
    this.preColor = this.recentColor
    this.recentlySelected.unshift(this.selected)
    this.checkRecentlySelected()
    console.log(this.selected)
  }
}
