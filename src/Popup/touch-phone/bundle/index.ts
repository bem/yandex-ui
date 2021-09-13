import { compose, composeU } from '@bem-react/core';

// base
import { Popup as PopupTouchPhone } from '../../Popup@touch-pad';
// _nonvisual
import { withNonvisual } from '../../_nonvisual/Popup_nonvisual';
// _target
import { withTargetAnchor } from '../../_target/Popup_target_anchor';
// _theme
import { withThemeClear } from '../../_theme/Popup_theme_clear';
import { withThemeNormal } from '../../_theme/Popup_theme_normal';
// _view
import { withViewDefault } from '../../_view/Popup_view_default';

export * from '../../Popup@touch-pad';

export const Popup = compose(
    withNonvisual,
    withTargetAnchor,
    withViewDefault,
    composeU(withThemeClear, withThemeNormal),
)(PopupTouchPhone);

export { Direction, directions } from '../../../usePopper';
