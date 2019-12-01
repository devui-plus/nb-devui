import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  restrictOneOpen = false;
  menu = [{
    title: '通用',
    open: true,
    children: [
      {
        title: 'Input 文本输入',
        active: true,
      }, {
        title: 'Slider 轮播'
      }, {
        title: 'ImagePreview 图片预览'
      }, {
        title: 'ColorPicker 颜色选择'
      }
    ]
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
