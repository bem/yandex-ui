import { FC, MouseEventHandler } from 'react';
import { compose, composeU } from '@bem-react/core';

import { ITextareaProps as ITextareaDesktopProps, Textarea as TextareaDesktop } from '../Textarea@desktop';
// _hasClear
import { withHasClear } from '../_hasClear/Textarea_hasClear@desktop';
// _size
import { withSizeM } from '../_size/Textarea_size_m';
import { withSizeS } from '../_size/Textarea_size_s';
// _theme
import { withThemeNormal } from '../_theme/Textarea_theme_normal@desktop';
// _view
import { withViewDefault } from '../_view/Textarea_view_default@desktop';

export * from '../Textarea@desktop';

export interface ITextareaProps extends ITextareaDesktopProps {
    size?: 'm' | 's';
    theme?: 'normal';
    view?: 'default';
    hasClear?: boolean;
    onClearClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Textarea = compose(
    withHasClear,
    withViewDefault,
    withThemeNormal,
    composeU(withSizeM, withSizeS),
)(TextareaDesktop) as FC<ITextareaProps>;
