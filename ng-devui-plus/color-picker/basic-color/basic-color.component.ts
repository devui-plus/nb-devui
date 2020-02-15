import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'd-basic-color',
  templateUrl: './basic-color.component.html',
  styleUrls: ['./basic-color.component.scss']
})
export class BasicColorComponent implements OnInit {
  @Input() basicColors;
  @Output() colorChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendColor(color) {
    this.colorChange.emit(color);
  }
}
