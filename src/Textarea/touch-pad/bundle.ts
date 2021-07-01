import { compose, composeU, ExtractProps } from '@bem-react/core';

import { Textarea as TextareaTouchPad } from '../Textarea@touch-pad';
import { withDebounceInput } from '../../withDebounceInput';
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

export const Textarea = compose(
    withDebounceInput,
    withHasClear,
    withViewDefault,
    withThemeNormal,
    composeU(withSizeM, withSizeS),
)(TextareaTouchPad);

export type ITextareaProps = ExtractProps<typeof Textarea>;
