import * as m from 'mithril';
import { ColorCube } from './color-cube';

export const ColorPanel = {
    view: function(vnode) {
        const { colors, setColor } = vnode.attrs;
        const colorBlocks = colors.map(color => {
            return m(ColorCube, { 
                onclick: function() {
                    setColor(color);
                },
                class: 'color-block', 
                color: color, size: 20 
            });
        });
        return m('.color-blocks', colorBlocks);
    }
};