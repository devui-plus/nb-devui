import { Component, OnInit } from '@angular/core';
import * as m from 'mithril';
import { ColorCube } from '../components/color-picker/color-cube';

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
    m.render(root, m(ColorCube, { color: '#1daf68' }))
  }

}
