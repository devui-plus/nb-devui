import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nb-devui';
  restrictOneOpen = false;
  menu = [{
    title: '通用',
    open: true,
    children: [
      {
        title: 'ColorPicker 颜色选择',
        link: '/demos/color-picker/demo',
      },
      {
        title: 'FluentSlider 轮播',
        link: '/demos/fluent-slider/demo',
      }, 
      {
        title: 'ImagePreview 图片预览',
        link: '/demos/image-preview/demo',
      },
      {
        title: 'SmartInput 文本输入',
        link: '/demos/smart-input/demo',
      }
    ]
  }];
}
