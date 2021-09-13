import { compose, composeU } from '@bem-react/core';

import { Radiobox as RadioboxTouchPhone } from '../../Radiobox@touch-phone';
// _size
import { withSizeM } from '../../_size/Radiobox_size_m';
import { withSizeS } from '../../_size/Radiobox_size_s';
// _theme
import { withThemeNormal } from '../../_theme/Radiobox_theme_normal';
import { withThemePseudo } from '../../_theme/Radiobox_theme_pseudo';
// _view
import { withViewDefault } from '../../_view/Radiobox_view_default';

export * from '../../Radiobox@touch-phone';

export const Radiobox = compose(
    withViewDefault,
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemePseudo),
)(RadioboxTouchPhone);
