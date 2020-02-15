import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';
import { saveRecentColors } from '../../shared/utils';

@Component({
  selector: 'd-recent-color',
  templateUrl: './recent-color.component.html',
  styleUrls: ['./recent-color.component.scss']
})
export class RecentColorComponent implements OnInit {
  @Input() color;
  @Input() limit: number;
  @Output() colorChange = new EventEmitter();
  recentlyUsed: Array<string> = ['#fff'];

  constructor() { }

  ngOnInit() {
    this.loadFromLocalData()
  }
  
  loadFromLocalData() {
    this.recentlyUsed = JSON.parse(localStorage.getItem('recentlyUsed')) || []
  }

  saveToLocalData() {
    localStorage.setItem('recentlyUsed', JSON.stringify(this.recentlyUsed))
  }

  saveRecentlyUsed() {
    saveRecentColors(this.recentlyUsed, this.color, this.limit);
    this.saveToLocalData()
  }

  sendColor(color) {
    this.colorChange.emit(color);
  }
}
