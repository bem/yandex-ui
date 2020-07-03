import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

// base
import { ICheckboxProps as ICheckboxDesktopProps, Checkbox as CheckboxDesktop } from '../Checkbox@desktop';
// _lines
import { withLinesMulti } from '../_lines/Checkbox_lines_multi';
import { withLinesOne } from '../_lines/Checkbox_lines_one';
// _size
import { withSizeM } from '../_size/Checkbox_size_m';
import { withSizeS } from '../_size/Checkbox_size_s';
// _theme
import { withThemeNormal } from '../_theme/Checkbox_theme_normal@desktop';
import { withThemePseudo } from '../_theme/Checkbox_theme_pseudo@desktop';
// _view
import { withViewDefault } from '../_view/Checkbox_view_default@desktop';
// _indeterminate
import { withIndeterminate } from '../_indeterminate/Checkbox_indeterminate';

export * from '../Checkbox@desktop';

export interface ICheckboxProps extends ICheckboxDesktopProps {
    lines?: 'multi' | 'one';
    size?: 'm' | 's';
    theme?: 'normal' | 'pseudo';
    view?: 'default';
    indeterminate?: boolean;
}

export const Checkbox = compose(
    withViewDefault,
    withIndeterminate,
    composeU(withLinesMulti, withLinesOne),
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemePseudo),
)(CheckboxDesktop) as FC<ICheckboxProps>;
