import * as m from 'mithril';
import { ColorCube } from './color-cube';
import { basicColorModel } from './model';

export const BasicColorPanel = {
    view: function() {
        const colorBlocks = basicColorModel.basicColors.map(color => {
            return m(ColorCube, { 
                onclick: basicColorModel.setBasicColor,
                class: 'color-block', 
                color: color, size: 20 
            });
        });
        return m('.color-blocks', colorBlocks);
    }
};