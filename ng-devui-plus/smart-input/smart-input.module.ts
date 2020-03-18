import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevUIModule } from 'ng-devui';
import { SmartInputComponent } from './smart-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DevUIModule,
        FormsModule
    ],
    exports: [
        SmartInputComponent,
    ],
    declarations: [
        SmartInputComponent,
    ],
    providers: [],
})
export class SmartInputModule {
}
