import { NgModule, ModuleWithProviders } from '@angular/core';

import { ColorPickerModule } from './color-picker';
import { FluentSliderModule } from './fluent-slider';
import { ImagePreviewModule } from './image-preview';
import { SmartInputModule } from './smart-input';
import { ShiningEditorModule } from './shining-editor/shining-editor.module';

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
    ShiningEditorModule
  ]
})
export class DevUIPlusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DevUIPlusModule
    }
  }
}