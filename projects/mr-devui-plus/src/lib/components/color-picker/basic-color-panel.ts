import * as m from 'mithril';
import { ColorPanel } from './color-panel';
import { basicColorModel } from './model';

export const BasicColorPanel = {
    view: function() {
        return m(ColorPanel, {
            colors: basicColorModel.basicColors,
            setColor: basicColorModel.setBasicColor
        });
    }
};