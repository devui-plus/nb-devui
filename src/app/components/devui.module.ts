import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevUIRoutingModule } from './devui-routing.module';

// 本地开发时使用
import { ColorPickerModule } from '../../../ng-devui-plus/color-picker';
import { FluentSliderModule } from '../../../ng-devui-plus/fluent-slider';
import { ImagePreviewModule } from '../../../ng-devui-plus/image-preview';
import { SmartInputModule } from '../../../ng-devui-plus/smart-input';

// 打包验证时使用
// import { ColorPickerModule } from '../../../dist/ng-devui-plus/color-picker';
// import { FluentSliderModule } from '../../../dist/ng-devui-plus/fluent-slider';
// import { ImagePreviewModule } from '../../../dist/ng-devui-plus/image-preview';
// import { SmartInputModule } from '../../../dist/ng-devui-plus/smart-input';

// 正式发布时使用
// import { ColorPickerModule } from 'ng-devui-plus/color-picker';
// import { FluentSliderModule } from 'ng-devui-plus/fluent-slider';
// import { ImagePreviewModule } from 'ng-devui-plus/image-preview';
// import { SmartInputModule } from 'ng-devui-plus/smart-input';

@NgModule({
  imports: [
    CommonModule,
    DevUIRoutingModule,
    ColorPickerModule,
    FluentSliderModule,
    ImagePreviewModule,
    SmartInputModule
  ],
  declarations: []
})
export class DevUIModule { }