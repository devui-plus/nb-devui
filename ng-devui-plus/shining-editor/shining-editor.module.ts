import { NgModule } from '@angular/core';
import { ShiningEditorComponent } from './shining-editor.component';
import { ShiningEditorDemoComponent } from './shining-editor-demo/shining-editor-demo.component';

@NgModule({
    imports: [],
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