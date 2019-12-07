import { NgModule, ModuleWithProviders } from '@angular/core';

import { ColorPickerModule } from './color-picker';
import { FluentSliderModule } from './fluent-slider';
import { ImagePreviewModule } from './image-preview';
import { SmartInputModule } from './smart-input';

export * from './color-picker';
export * from './fluent-slider';
export * from './image-preview';
export * from './smart-input';

@NgModule({
  imports: [],
  exports: [
    ColorPickerModule,
    FluentSliderModule,
    ImagePreviewModule,
    SmartInputModule,
  ],
  declarations: []
})
export class DevUIPlusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DevUIPlusModule
    }
  }
}