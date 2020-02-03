import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPickerDemoComponent } from './color-picker/color-picker-demo/color-picker-demo.component';
import { FluentSliderDemoComponent } from './fluent-slider/fluent-slider-demo/fluent-slider-demo.component';
import { ImagePreviewDemoComponent } from './image-preview/image-preview-demo/image-preview-demo.component';
import { SmartInputDemoComponent } from './smart-input/smart-input-demo/smart-input-demo.component';
import { ShiningEditorDemoComponent } from './shining-editor/shining-editor-demo/shining-editor-demo.component';

import { MrDevuiPlusComponent } from '../../../projects/mr-devui-plus/src/lib/mr-devui-plus.component';

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
  },
  {
    path: 'shining-editor/demo',
    component: ShiningEditorDemoComponent
  },
  {
    path: 'mithril/color-picker/demo',
    component: MrDevuiPlusComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DevUIRoutingModule { }