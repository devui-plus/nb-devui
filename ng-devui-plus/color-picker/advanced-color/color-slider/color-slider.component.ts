import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { getColorByPointerPositionInSlider, getPointerPositionInSliderByColor } from '../../../shared/utils/color';

@Component({
  selector: 'd-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss']
})
export class ColorSliderComponent implements OnInit {
  @Input() color;
  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
