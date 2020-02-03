import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { ColorInputComponent } from './color-input/color-input.component';
import { CommonModule } from '@angular/common';
import { DevUIModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { BasicColorComponent } from './basic-color/basic-color.component';

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
        BasicColorComponent,
    ],
    declarations: [
        ColorPickerComponent,
        ColorCubeComponent,
        ColorInputComponent,
        BasicColorComponent,
    ],
    providers: [],
})
export class ColorPickerModule {
}