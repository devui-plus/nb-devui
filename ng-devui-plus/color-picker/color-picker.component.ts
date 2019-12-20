import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() hide;
  @Output() confirm = new EventEmitter();
  color: string = "#b52d2d";
  selectedPanel: string = 'basic';
  recentlyUsed: Array<string> = ['#fff'];
  basicColors: Array<string> = ['#1daf68', '#b52d2d'];

  constructor() { }

  ngOnInit() {
  }

  selectPanel(panel) {    
    this.selectedPanel = panel
  }

  setColor(color) {
    this.color = color
  }
  
  doConfirm() {
    this.saveRecentlyUsed()
    this.confirm.emit(this.color)
  }

  saveRecentlyUsed() {
    let recentlyUsed = this.recentlyUsed
    if (!(recentlyUsed.length && recentlyUsed[0] === this.color))
      recentlyUsed.unshift((this.color))
    if (recentlyUsed.length > 9) {
      recentlyUsed = recentlyUsed.slice(0, 9)
    }
    this.recentlyUsed = recentlyUsed
  }

}
