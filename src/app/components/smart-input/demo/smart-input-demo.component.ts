import { Component, OnInit } from '@angular/core';
import { DevuiSourceData } from '../../../../../ng-devui-plus/shared/devui-codebox';

@Component({
  selector: 'd-smart-input-demo',
  templateUrl: './smart-input-demo.component.html',
})
export class SmartInputDemoComponent implements OnInit {
  basicSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./basic/basic.component.html')},
    {title: 'TS', language: 'typescript', code:  require('!!raw-loader!./basic/basic.component.ts')}
  ];
  clearSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./input-clear/input-clear.component.html')},
    {title: 'TS', language: 'typescript', code:  require('!!raw-loader!./input-clear/input-clear.component.ts')}
  ];

  constructor() { }

  ngOnInit() {
  }
  

}
