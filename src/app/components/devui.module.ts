import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevUIModule } from 'ng-devui';

import { DevUIRoutingModule } from './devui-routing.module';

// 本地开发时使用
import { ColorPickerModule } from '../../../ng-devui-plus/color-picker';
import { FluentSliderModule } from '../../../ng-devui-plus/fluent-slider';
import { ImagePreviewModule } from '../../../ng-devui-plus/image-preview';
import { SmartInputModule } from '../../../ng-devui-plus/smart-input';
import { ShiningEditorModule } from '../../../ng-devui-plus/shining-editor';

import { MrDevuiPlusModule } from '../../../projects/mr-devui-plus/src/lib/mr-devui-plus.module';

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

// Demos
import { ColorPickerDemoComponent } from './color-picker/color-picker-demo/color-picker-demo.component';
import { FluentSliderDemoComponent } from './fluent-slider/fluent-slider-demo/fluent-slider-demo.component';
import { ImagePreviewDemoComponent } from './image-preview/image-preview-demo/image-preview-demo.component';
import { SmartInputDemoComponent } from './smart-input/smart-input-demo/smart-input-demo.component';
import { ShiningEditorDemoComponent } from './shining-editor/shining-editor-demo/shining-editor-demo.component';

@NgModule({
  imports: [
    CommonModule,
    DevUIModule,
    DevUIRoutingModule,
    ColorPickerModule,
    FluentSliderModule,
    ImagePreviewModule,
    SmartInputModule,
    ShiningEditorModule,

    MrDevuiPlusModule
  ],
  declarations: [
    ColorPickerDemoComponent,
    FluentSliderDemoComponent,
    ImagePreviewDemoComponent,
    SmartInputDemoComponent,
    ShiningEditorDemoComponent
  ]
})
export class DevUIPlusModule { }
