import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { ShiningEditorComponent } from './shining-editor.component';
import { ShiningEditorDemoComponent } from './shining-editor-demo/shining-editor-demo.component';

@NgModule({
    imports: [
        DevUIModule
      ],
    exports: [
        ShiningEditorComponent,
        ShiningEditorDemoComponent
    ],
    declarations: [
        ShiningEditorComponent,
        ShiningEditorDemoComponent
    ],
    providers: [],
})
export class ShiningEditorModule {
}