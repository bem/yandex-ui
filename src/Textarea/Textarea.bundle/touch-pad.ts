import { FC, MouseEventHandler } from 'react';
import { compose, composeU } from '@bem-react/core';

import { ITextareaProps as ITextareaTouchPhoneProps, Textarea as TextareaTouchPad } from '../Textarea@touch-pad';
import { withDebounceInput, Debounced } from '../../withDebounceInput';
// _hasClear
import { withHasClear } from '../_hasClear/Textarea_hasClear@touch-pad';
// _size
import { withSizeM } from '../_size/Textarea_size_m';
import { withSizeS } from '../_size/Textarea_size_s';
// _theme
import { withThemeNormal } from '../_theme/Textarea_theme_normal';
// _view
import { withViewDefault } from '../_view/Textarea_view_default';

export * from '../Textarea@touch-pad';

export interface ITextareaProps extends ITextareaTouchPhoneProps, Debounced {
    size?: 'm' | 's';
    theme?: 'normal';
    view?: 'default';
    hasClear?: boolean;
    onClearClick?: MouseEventHandler<HTMLSpanElement>;
}

export const Textarea: FC<ITextareaProps> = compose(
    withDebounceInput,
    withHasClear,
    withViewDefault,
    withThemeNormal,
    composeU(withSizeM, withSizeS),
)(TextareaTouchPad);
