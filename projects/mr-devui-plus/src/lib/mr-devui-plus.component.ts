import { Component, OnInit } from '@angular/core';
import * as m from 'mithril';
import { ColorInput } from './components/color-picker/color-input';

@Component({
  selector: 'm-mr-devui-plus',
  template: `
    <p id="mithril-root">
    </p>
  `,
  styles: []
})
export class MrDevuiPlusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const root = document.querySelector('#mithril-root');
    m.mount(root, ColorInput);
  }

}
