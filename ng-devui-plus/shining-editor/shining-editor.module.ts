import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { ShiningEditorComponent } from './shining-editor.component';
import { InlineSplitterComponent } from './inline-splitter/inline-splitter.component';

@NgModule({
    imports: [
        CommonModule,
        DevUIModule
      ],
    exports: [
        ShiningEditorComponent,
    ],
    declarations: [
        ShiningEditorComponent,
        InlineSplitterComponent
    ],
    providers: [],
})
export class ShiningEditorModule {
}