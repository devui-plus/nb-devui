import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'd-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {
  @Input() color;
  @Output() send = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  inputChange() {
    this.send.emit(this.color)
  }

  doConfirm() {
    this.confirm.emit(this.color)
  }
}
