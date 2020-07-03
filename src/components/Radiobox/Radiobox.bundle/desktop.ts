import { compose, composeU } from '@bem-react/core';

import { Radiobox as RadioboxDesktop } from '../Radiobox@desktop';
// _size
import { withSizeM } from '../_size/Radiobox_size_m';
import { withSizeS } from '../_size/Radiobox_size_s';
// _theme
import { withThemeNormal } from '../_theme/Radiobox_theme_normal@desktop';
import { withThemePseudo } from '../_theme/Radiobox_theme_pseudo@desktop';
// _view
import { withViewDefault } from '../_view/Radiobox_view_default@desktop';

export * from '../Radiobox@desktop';

export const Radiobox = compose(
    withViewDefault,
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemePseudo),
)(RadioboxDesktop);
