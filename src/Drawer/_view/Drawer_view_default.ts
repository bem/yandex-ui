import { withBemMod } from '@bem-react/core';

import { cnDrawer } from '../Drawer.const';
import './Drawer_view_default.css';

export interface IDrawerViewDefaultProps {
    view?: 'default';
}

export const withViewDefault = withBemMod<IDrawerViewDefaultProps>(cnDrawer(), {
    view: 'default',
});
