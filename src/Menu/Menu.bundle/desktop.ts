import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

// base
import { IMenuProps as IMenuDesktopProps, Menu as MenuDesktop } from '../Menu@desktop';
// _size
import { withSizeM } from '../_size/Menu_size_m';
import { withSizeS } from '../_size/Menu_size_s';
// _theme
import { withThemeNormal } from '../_theme/Menu_theme_normal@desktop';
// _view
import { withViewDefault } from '../_view/Menu_view_default@desktop';
// _width
import { withWidthAuto } from '../_width/Menu_width_auto';
import { withWidthMax } from '../_width/Menu_width_max';

export * from '../Menu@desktop';

export interface IMenuProps extends IMenuDesktopProps {
    size?: 'm' | 's';
    view?: 'default';
    width?: 'auto' | 'max';
    theme?: 'normal';
}

export const Menu = compose(
    composeU(withSizeM, withSizeS),
    composeU(withWidthAuto, withWidthMax),
    withViewDefault,
    withThemeNormal,
)(MenuDesktop) as FC<IMenuProps>;
