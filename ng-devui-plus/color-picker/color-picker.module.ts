import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { ColorInputComponent } from './color-input/color-input.component';
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
        ColorInputComponent,
    ],
    declarations: [
        ColorPickerComponent,
        ColorCubeComponent,
        ColorInputComponent,
    ],
    providers: [],
})
export class ColorPickerModule {
}