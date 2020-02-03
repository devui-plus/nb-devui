import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'd-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {
  @Input() color;
  @Output() colorChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  inputChange() {
    this.colorChange.emit(this.color)
  }
}
