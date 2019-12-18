import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { ShiningEditorComponent } from './shining-editor.component';
import { ShiningEditorDemoComponent } from './shining-editor-demo/shining-editor-demo.component';
import { InlineSplitterComponent } from './inline-splitter/inline-splitter.component';

@NgModule({
    imports: [
        CommonModule,
        DevUIModule
      ],
    exports: [
        ShiningEditorComponent,
        ShiningEditorDemoComponent
    ],
    declarations: [
        ShiningEditorComponent,
        ShiningEditorDemoComponent,
        InlineSplitterComponent
    ],
    providers: [],
})
export class ShiningEditorModule {
}