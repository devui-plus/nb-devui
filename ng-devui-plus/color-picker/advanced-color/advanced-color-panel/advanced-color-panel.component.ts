import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-advanced-color-panel',
  templateUrl: './advanced-color-panel.component.html',
  styleUrls: ['./advanced-color-panel.component.scss']
})
export class AdvancedColorPanelComponent implements OnInit {
  @Input() color;
  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
