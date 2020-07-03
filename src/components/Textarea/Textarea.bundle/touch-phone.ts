import { FC, MouseEventHandler } from 'react';
import { compose, composeU } from '@bem-react/core';

import { ITextareaProps as ITextareaTouchPhoneProps, Textarea as TextareaTouchPhone } from '../Textarea@touch-phone';
// _hasClear
import { withHasClear } from '../_hasClear/Textarea_hasClear@touch-phone';
// _size
import { withSizeM } from '../_size/Textarea_size_m';
import { withSizeS } from '../_size/Textarea_size_s';
// _theme
import { withThemeNormal } from '../_theme/Textarea_theme_normal';
// _view
import { withViewDefault } from '../_view/Textarea_view_default';

export * from '../Textarea@touch-phone';

export interface ITextareaProps extends ITextareaTouchPhoneProps {
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
)(TextareaTouchPhone) as FC<ITextareaProps>;
