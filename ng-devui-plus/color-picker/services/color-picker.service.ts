import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ColorPickerService {
  color: string = '';
  pureColor: string = '#ff0000';
  updateColor = new EventEmitter<string>();
  updatePureColor = new EventEmitter<void>();
  saveRecentColor = new EventEmitter<void>();

  constructor() { }

  getColor() {
    return this.color;
  }

  getPureColor() {
    return this.pureColor;
  }

  setColor(color, setter: string = 'normal') {
    var oldColor = this.color
    this.color = color;
    if (oldColor !== color)
      this.updateColor.emit(setter); // setter is who set the color
  }

  setPureColor(color) {
    var oldColor = this.pureColor
    this.pureColor = color;
    if (oldColor !== color)
      this.updatePureColor.emit();
  }
}
