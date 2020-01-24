import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { AdvancedColorComponent } from './advanced-color/advanced-color.component';
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
        AdvancedColorComponent,
    ],
    declarations: [
        ColorPickerComponent,
        ColorCubeComponent,
        AdvancedColorComponent,
    ],
    providers: [],
})
export class ColorPickerModule {
}