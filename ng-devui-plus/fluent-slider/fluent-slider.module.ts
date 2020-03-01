import { NgModule } from '@angular/core';
import { FluentSliderComponent } from './fluent-slider.component';
import { FluentSliderItemComponent } from './fluent-slider-item/fluent-slider-item.component';

@NgModule({
    imports: [],
    exports: [
        FluentSliderComponent,
        FluentSliderItemComponent,
    ],
    declarations: [
        FluentSliderComponent,
        FluentSliderItemComponent,
    ],
    providers: [],
})
export class FluentSliderModule {
}
