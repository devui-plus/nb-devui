import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
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
        link: '/components/color-picker',
      },
      {
        title: 'FluentSlider 轮播',
        link: '/components/fluent-slider',
      }, 
      {
        title: 'ImagePreview 图片预览',
        link: '/components/image-preview',
      },
      {
        title: 'SmartInput 文本输入',
        link: '/components/smart-input',
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
