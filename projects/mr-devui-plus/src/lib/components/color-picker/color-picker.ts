import * as m from 'mithril';
import { ColorInput } from './color-input';
import { BasicColorPanel } from './basic-color-panel';

export const ColorPicker = {
    view: function(vnode) {
        return m('.color-picker', [
            m('.color-panel', m(BasicColorPanel)),
            m('hr'),
            m(ColorInput)
        ]);
    }
};