import * as m from 'mithril';
import { ColorCube } from './color-cube';

const ColorModel = {
    color: '#1daf68',
    setColor: function(event) {
        ColorModel.color = event.target.value;
    },
    confirm: function() {
        console.log('confirm color:', ColorModel.color);
    }
};

export const ColorInput = {
    view: function() {
        return m('.control', [
            m(ColorCube, { color: ColorModel.color }),
            m('input[type=text]', { 
                oninput: ColorModel.setColor,
                value: ColorModel.color 
            }),
            m('button', { onclick: ColorModel.confirm }, '确定')
        ])
    }
}