import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { AdvancedColorComponent } from './advanced-color/advanced-color.component';
import { AdvancedColorPanelComponent } from './advanced-color/advanced-color-panel/advanced-color-panel.component';
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
        AdvancedColorPanelComponent,
    ],
    declarations: [
        ColorPickerComponent,
        ColorCubeComponent,
        AdvancedColorComponent,
        AdvancedColorPanelComponent,
    ],
    providers: [],
})
export class ColorPickerModule {
}