import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nb-devui';
  restrictOneOpen = false;
  menuShow: boolean;
  menu = [{
    title: '通用',
    open: true,
    children: [
      {
        title: 'ColorPicker 颜色选择',
        link: '/components/color-picker/demo',
      },
      {
        title: 'FluentSlider 轮播',
        link: '/components/fluent-slider/demo',
      }, 
      {
        title: 'ImagePreview 图片预览',
        link: '/components/image-preview/demo',
      },
      {
        title: 'SmartInput 文本输入',
        link: '/components/smart-input/demo',
      },
      {
        title: 'ShiningEditor 富文本',
        link: '/components/shining-editor/demo',
      },

      {
        title: 'ColorPicker 颜色选择 - Mithril',
        link: '/components/mithril/color-picker/demo',
      }
    ]
  }];

  @HostListener('window:resize', ['$event']) onresize(event) {
    this.menuShow = !this.isMobile(event.target.innerWidth);
  }

  ngOnInit() {
    this.menuShow = !this.isMobile(screen.width);
  }

  isMobile(screenWidth) {
    return screenWidth >= 320 && screenWidth < 1024;
  }

  showMenu() {
    this.menuShow = !this.menuShow
  }
}
