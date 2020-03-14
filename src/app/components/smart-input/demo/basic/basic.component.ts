import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-smart-input-basic',
  templateUrl: './basic.component.html',
  styles: [
    `
      .col-md-5 {
        width: 50%;
      }
    `
  ]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
