import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-smart-input-clear',
  templateUrl: './input-clear.component.html',
  styles: [
    `
      .col-md-5 {
        width: 50%;
      }
    `
  ]
})
export class InputClearComponent implements OnInit {

  clearText(text){
    console.log('已清除内容：'+text);
  }

  constructor() { }

  ngOnInit() {
  }

}
