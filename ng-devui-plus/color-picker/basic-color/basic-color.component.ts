import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basic-color',
  templateUrl: './basic-color.component.html',
  styleUrls: ['./basic-color.component.scss']
})
export class BasicColorComponent implements OnInit {
  @Input() color;
  @Input() basicColors;
  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendColor(color) {
    this.send.emit(color);
  }

}
