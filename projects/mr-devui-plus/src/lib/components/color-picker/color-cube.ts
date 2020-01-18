import * as m from 'mithril';

export const ColorCube = {
  view: function(vnode) {
    return m('div', { class: 'color-cube', style: `background-color: ${vnode.attrs.color}` })
  }
}