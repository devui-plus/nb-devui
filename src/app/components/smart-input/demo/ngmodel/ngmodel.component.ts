import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-smart-input-ngmodel',
  templateUrl: './ngmodel.component.html',
  styles: [
    `
      .col-md-5 {
        width: 50%;
      }
    `
  ]
})
export class InputNgmodelComponent implements OnInit {
  text='text';

  constructor() { }

  ngOnInit() {
  }

}
