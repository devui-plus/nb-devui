import { NgModule } from '@angular/core';
import { SmartInputComponent } from './smart-input.component';
import { SmartInputDemoComponent } from './smart-input-demo/smart-input-demo.component';

@NgModule({
    imports: [],
    exports: [
        SmartInputComponent,
        SmartInputDemoComponent
    ],
    declarations: [
        SmartInputComponent,
        SmartInputDemoComponent
    ],
    providers: [],
})
export class SmartInputModule {
}