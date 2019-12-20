import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { ColorPickerDemoComponent } from './color-picker-demo/color-picker-demo.component';
import { CommonModule } from '@angular/common';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DevUIModule,
        FormsModule,
    ],
    exports: [
        ColorPickerComponent,
        ColorCubeComponent,
        ColorPickerDemoComponent
    ],
    declarations: [
        ColorPickerComponent,
        ColorCubeComponent,
        ColorPickerDemoComponent
    ],
    providers: [],
})
export class ColorPickerModule {
}