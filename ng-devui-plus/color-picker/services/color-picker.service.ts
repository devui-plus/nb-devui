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

  // setter is who set the color, default as ''
  setColor(color, setter: string = 'normal') {
    var changed = this.color !== color
    this.color = color;
    if (changed)
      this.updateColor.emit(setter);
  }

  setPureColor(color) {
    var changed = this.pureColor !== color
    this.pureColor = color;
    if (changed)
      this.updatePureColor.emit();
  }
}
