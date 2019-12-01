import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevUIRoutingModule } from './devui-routing.module';
import { ColorPickerComponent } from '../components/color-picker/color-picker.component';
import { FluentSliderComponent } from '../components/fluent-slider/fluent-slider.component';
import { ImagePreviewComponent } from '../components/image-preview/image-preview.component';
import { SmartInputComponent } from '../components/smart-input/smart-input.component';

@NgModule({
  imports: [
    CommonModule,
    DevUIRoutingModule
  ],
  declarations: [
    ColorPickerComponent,
    FluentSliderComponent,
    ImagePreviewComponent,
    SmartInputComponent
  ]
})
export class DevUIModule { }