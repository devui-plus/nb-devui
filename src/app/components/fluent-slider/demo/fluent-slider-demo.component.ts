import { Component, OnInit } from '@angular/core';
import { DevuiSourceData } from '../../../../../ng-devui-plus/shared/devui-codebox';

@Component({
  selector: 'd-fluent-slider-demo',
  templateUrl: './fluent-slider-demo.component.html'
})
export class FluentSliderDemoComponent implements OnInit {
  basicSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./basic/basic.component.html')},
    {title: 'TS', language: 'typescript', code:  require('!!raw-loader!./basic/basic.component.ts')},
    {title: 'CSS', language: 'css', code:  require('!!raw-loader!./basic/basic.component.scss')}
  ];

  constructor() { }

  ngOnInit() {
  }

}
