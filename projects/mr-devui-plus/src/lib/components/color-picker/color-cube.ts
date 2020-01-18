import * as m from 'mithril';

export const ColorCube = {
  view: function(vnode) {
    const width = vnode.attrs.size || 30;
    const height = width;
    const className = vnode.attrs.class ? ` ${vnode.attrs.class}` : '';
    return m('div', { 
      onclick: function() {
        vnode.attrs.onclick(vnode.attrs.color);
      },
      class: `color-cube${className}`, 
      style: `
        background-color: ${vnode.attrs.color};
        width:${width}px;
        height:${height}px;
      `,
    })
  }
}