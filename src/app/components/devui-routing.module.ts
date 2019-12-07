import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 本地开发时使用
import { ColorPickerDemoComponent } from '../../../ng-devui-plus/color-picker/color-picker-demo/color-picker-demo.component';
import { FluentSliderDemoComponent } from '../../../ng-devui-plus/fluent-slider/fluent-slider-demo/fluent-slider-demo.component';
import { ImagePreviewDemoComponent } from '../../../ng-devui-plus/image-preview/image-preview-demo/image-preview-demo.component';
import { SmartInputDemoComponent } from '../../../ng-devui-plus/smart-input/smart-input-demo/smart-input-demo.component';

// 打包验证时使用
// import { ColorPickerDemoComponent } from '../../../dist/ng-devui-plus/color-picker';
// import { FluentSliderDemoComponent } from '../../../dist/ng-devui-plus/fluent-slider';
// import { ImagePreviewDemoComponent } from '../../../dist/ng-devui-plus/image-preview';
// import { SmartInputDemoComponent } from '../../../dist/ng-devui-plus/smart-input';

// 正式发布时使用
// import { ColorPickerDemoComponent } from 'ng-devui-plus/color-picker';
// import { FluentSliderDemoComponent } from 'ng-devui-plus/fluent-slider';
// import { ImagePreviewDemoComponent } from 'ng-devui-plus/image-preview';
// import { SmartInputDemoComponent } from 'ng-devui-plus/smart-input';

const routes: Routes = [
  {
    path: 'color-picker/demo',
    component: ColorPickerDemoComponent
  },
  {
    path: 'fluent-slider/demo',
    component: FluentSliderDemoComponent
  },
  {
    path: 'image-preview/demo',
    component: ImagePreviewDemoComponent
  },
  {
    path: 'smart-input/demo',
    component: SmartInputDemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DevUIRoutingModule { }