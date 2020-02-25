import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExamplePanelComponent } from './example-panel.component';
import { DocumentComponent } from './document.component';
import { routesConfig } from './document.route';
import { DevUIModule } from 'ng-devui';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'html', func: xml}
  ];
}

@NgModule({
  declarations: [
    ExamplePanelComponent,
    DocumentComponent,
  ],
  imports: [
    CommonModule,
    DevUIModule.forRoot(),
    RouterModule.forChild([
      {
          path: '',
          component: DocumentComponent,
          data: {},
          children: routesConfig
      },
    ]),
  ]
})
export class DocumentModule {
  constructor() {}
}
