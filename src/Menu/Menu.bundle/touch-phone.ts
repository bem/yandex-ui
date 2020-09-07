import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

// base
import { IMenuProps as IMenuTouchPhoneProps, Menu as MenuTouchPhone } from '../Menu@touch-phone';
// _size
import { withSizeM } from '../_size/Menu_size_m';
import { withSizeS } from '../_size/Menu_size_s';
// _theme
import { withThemeNormal } from '../_theme/Menu_theme_normal';
// _view
import { withViewDefault } from '../_view/Menu_view_default';
// _width
import { withWidthAuto } from '../_width/Menu_width_auto';
import { withWidthMax } from '../_width/Menu_width_max';

export * from '../Menu@touch-phone';

export interface IMenuProps extends IMenuTouchPhoneProps {
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
)(MenuTouchPhone) as FC<IMenuProps>;
