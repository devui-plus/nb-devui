import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmartInputModule } from '../../../../../ng-devui-plus/smart-input';
import { SmartInputDemoComponent } from './smart-input-demo.component';
import { DevUIApiComponent } from '../../../../../ng-devui-plus//shared/devui-api/devui-api.component';
import { BasicComponent } from './basic/basic.component';
import { DevUICodeboxModule } from '../../../../../ng-devui-plus/shared/devui-codebox';
import { DevUIApiModule } from '../../../../../ng-devui-plus//shared/devui-api/devui-api.module';
import { InputClearComponent } from './input-clear/input-clear.component';
import { InputNgmodelComponent } from './ngmodel/ngmodel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SmartInputModule,
    DevUICodeboxModule,
    DevUIApiModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: SmartInputDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        api: require('!html-loader!markdown-loader!../doc/api.md')
      }}
    ])
  ],
  exports: [SmartInputDemoComponent],
  declarations: [
    SmartInputDemoComponent,
    BasicComponent,
    InputClearComponent,
    InputNgmodelComponent,
  ],
  entryComponents: [
    SmartInputDemoComponent,
  ],
})
export class SmartInputDemoModule { }
