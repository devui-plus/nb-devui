import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-demo',
  templateUrl: './color-picker-demo.component.html',
  styleUrls: ['./color-picker-demo.component.scss']
})
export class ColorPickerDemoComponent implements OnInit {
  recentlySelected = ["rgba(69,226,250,0.9)", "rgba(33,37,232,0.5)", "rgba(2,139,216,0.8)"]
  constructor() { }

  ngOnInit() {
  }

}
