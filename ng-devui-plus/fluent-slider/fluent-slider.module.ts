import { NgModule } from '@angular/core';
import { FluentSliderComponent } from './fluent-slider.component';
import { FluentSliderDemoComponent } from './fluent-slider-demo/fluent-slider-demo.component';

@NgModule({
    imports: [],
    exports: [
        FluentSliderComponent,
        FluentSliderDemoComponent
    ],
    declarations: [
        FluentSliderComponent,
        FluentSliderDemoComponent
    ],
    providers: [],
})
export class FluentSliderModule {
}