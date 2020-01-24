import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-color',
  templateUrl: './advanced-color.component.html',
  styleUrls: ['./advanced-color.component.scss']
})
export class AdvancedColorComponent implements OnInit {
  @Input() color;
  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendColor() {
    this.send.emit(this.color)
  }

}
