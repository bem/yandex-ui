import { compose, composeU, ExtractProps } from '@bem-react/core';

// base
import { Checkbox as CheckboxTouchPad } from '../Checkbox@touch-pad';
// _lines
import { withLinesMulti } from '../_lines/Checkbox_lines_multi';
import { withLinesOne } from '../_lines/Checkbox_lines_one';
// _size
import { withSizeM } from '../_size/Checkbox_size_m';
import { withSizeS } from '../_size/Checkbox_size_s';
// _theme
import { withThemeNormal } from '../_theme/Checkbox_theme_normal';
import { withThemePseudo } from '../_theme/Checkbox_theme_pseudo';
// _view
import { withViewDefault } from '../_view/Checkbox_view_default';
// _indeterminate
import { withIndeterminate } from '../_indeterminate/Checkbox_indeterminate';

export * from '../Checkbox@touch-pad';

export const Checkbox = compose(
    withViewDefault,
    withIndeterminate,
    composeU(withLinesMulti, withLinesOne),
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemePseudo),
)(CheckboxTouchPad);

export type ICheckboxProps = ExtractProps<typeof Checkbox>;
