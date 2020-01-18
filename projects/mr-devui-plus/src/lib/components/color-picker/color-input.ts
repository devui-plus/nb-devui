import * as m from 'mithril';
import { ColorCube } from './color-cube';
import { ColorInputModel } from './model';

export const ColorInput = {
    view: function() {
        return m('.control', [
            m(ColorCube, { 
                onclick: ColorInputModel.confirm,
                color: ColorInputModel.color 
            }),
            m('input[type=text]', { 
                oninput: ColorInputModel.setColor,
                value: ColorInputModel.color 
            }),
            m('button', { onclick: ColorInputModel.confirm }, '确定')
        ])
    }
}