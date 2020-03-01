import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-fluent-slider-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  backgroundItems = [{
    content: 'Red',
    background: '#ff4c41'
  }, {
    content: 'Green',
    background: '#41c2ff'
  }]
  constructor() { }

  ngOnInit() {
  }

}
