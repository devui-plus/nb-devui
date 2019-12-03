import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevUIRoutingModule } from './devui-routing.module';
import { ColorPickerDemoComponent } from './color-picker/color-picker-demo/color-picker-demo.component';
import { FluentSliderDemoComponent } from './fluent-slider/fluent-slider-demo/fluent-slider-demo.component';
import { ImagePreviewDemoComponent } from './image-preview/image-preview-demo/image-preview-demo.component';
import { SmartInputDemoComponent } from './smart-input/smart-input-demo/smart-input-demo.component';
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
    ColorPickerDemoComponent,
    FluentSliderDemoComponent,
    ImagePreviewDemoComponent,
    SmartInputDemoComponent,
    ColorPickerComponent,
    FluentSliderComponent,
    ImagePreviewComponent,
    SmartInputComponent
  ]
})
export class DevUIModule { }