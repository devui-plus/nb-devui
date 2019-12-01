import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPickerDemoComponent } from '../demos/color-picker-demo/color-picker-demo.component';
import { FluentSliderDemoComponent } from '../demos/fluent-slider-demo/fluent-slider-demo.component';
import { ImagePreviewDemoComponent } from '../demos/image-preview-demo/image-preview-demo.component';
import { SmartInputDemoComponent } from '../demos/smart-input-demo/smart-input-demo.component';

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