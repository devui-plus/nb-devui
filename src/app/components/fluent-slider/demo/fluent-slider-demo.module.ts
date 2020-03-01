import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FluentSliderModule } from '../../../../../ng-devui-plus/fluent-slider';
import { FluentSliderDemoComponent } from './fluent-slider-demo.component';
import { DevUIApiComponent } from '../../../../../ng-devui-plus/shared/devui-api/devui-api.component';
import { BasicComponent } from './basic/basic.component';
import { DevUICodeboxModule } from '../../../../../ng-devui-plus/shared/devui-codebox';
import { DevUIApiModule } from '../../../../../ng-devui-plus/shared/devui-api/devui-api.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FluentSliderModule,
    DevUICodeboxModule,
    DevUIApiModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: FluentSliderDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        api: require('!html-loader!markdown-loader!../doc/api.md')
      }}
    ])
  ],
  exports: [FluentSliderDemoComponent],
  declarations: [
    FluentSliderDemoComponent,
    BasicComponent,
  ],
  entryComponents: [
    FluentSliderDemoComponent,
  ],
})
export class FluentSliderDemoModule {
}

