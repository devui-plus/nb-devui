import { Component, OnInit } from '@angular/core';
import * as m from 'mithril';
import { ColorPicker } from './components/color-picker/color-picker';

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
    m.mount(root, ColorPicker);
  }

}
