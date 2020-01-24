import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-demo',
  templateUrl: './color-picker-demo.component.html',
  styleUrls: ['./color-picker-demo.component.scss']
})
export class ColorPickerDemoComponent implements OnInit {
  backgroundColor: string = '#1daf68';
  hideColorPicker: boolean = true;
  tab1acticeID = 'tab1';

  constructor() { }

  ngOnInit() {
  }

  showColorPicker() {
    this.hideColorPicker = false
  }

  onCancel() {
    this.hideColorPicker = true
  }

  updateColor(color) {
    this.backgroundColor = color
  }

  onConfirm(color) {
    this.backgroundColor = color
    this.hideColorPicker = true
  }

}
