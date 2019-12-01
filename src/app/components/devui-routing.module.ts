import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPickerComponent } from '../components/color-picker/color-picker.component';
import { FluentSliderComponent } from '../components/fluent-slider/fluent-slider.component';
import { ImagePreviewComponent } from '../components/image-preview/image-preview.component';
import { SmartInputComponent } from '../components/smart-input/smart-input.component';

const routes: Routes = [
  {
    path: 'color-picker',
    component: ColorPickerComponent
  },
  {
    path: 'fluent-slider',
    component: FluentSliderComponent
  },
  {
    path: 'image-preview',
    component: ImagePreviewComponent
  },
  {
    path: 'smart-input',
    component: SmartInputComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DevUIRoutingModule { }