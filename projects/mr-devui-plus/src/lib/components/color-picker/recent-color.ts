import * as m from 'mithril';
import { ColorPanel } from './color-panel';
import { recentColorModel } from './model';

export const RecentColor = {
    view: function() {
        return m('.recent-color', [
            m('.title', '最近使用颜色'),
            m(ColorPanel, {
                colors: recentColorModel.recentColors,
                setColor: recentColorModel.setRecentColor
            })
        ]);
    }
}