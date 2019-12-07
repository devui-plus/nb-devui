import { NgModule } from '@angular/core';
import { ImagePreviewComponent } from './image-preview.component';
import { ImagePreviewDemoComponent } from './image-preview-demo/image-preview-demo.component';

@NgModule({
    imports: [],
    exports: [
        ImagePreviewComponent,
        ImagePreviewDemoComponent
    ],
    declarations: [
        ImagePreviewComponent,
        ImagePreviewDemoComponent
    ],
    providers: [],
})
export class ImagePreviewModule {
}