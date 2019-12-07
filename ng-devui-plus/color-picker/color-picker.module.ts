import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerDemoComponent } from './color-picker-demo/color-picker-demo.component';

@NgModule({
    imports: [],
    exports: [
        ColorPickerComponent,
        ColorPickerDemoComponent
    ],
    declarations: [
        ColorPickerComponent,
        ColorPickerDemoComponent
    ],
    providers: [],
})
export class ColorPickerModule {
}