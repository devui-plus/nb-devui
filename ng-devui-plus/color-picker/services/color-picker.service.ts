import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class ColorPickerService {
  color: string = '';
  pureColor: string = '#ff0000';
  updateColor = new EventEmitter<void>();
  updatePureColor = new EventEmitter<void>();
  saveRecentColor = new EventEmitter<void>();

  constructor() { }

  getColor() {
    return this.color;
  }

  getPureColor() {
    return this.pureColor;
  }

  setColor(color) {
    var changed = this.color !== color
    this.color = color;
    if (changed)
      this.updateColor.emit();
  }

  setPureColor(color) {
    var changed = this.pureColor !== color
    this.pureColor = color;
    if (changed)
      this.updatePureColor.emit();
  }
}
