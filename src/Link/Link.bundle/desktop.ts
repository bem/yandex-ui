import { compose, composeU } from '@bem-react/core';

// base
import { Link as LinkDesktop } from '../Link@desktop';
// _pseudo
import { withPseudo } from '../_pseudo/Link_pseudo';
// _theme
import { withThemeBlack } from '../_theme/Link_theme_black@desktop';
import { withThemeGhost } from '../_theme/Link_theme_ghost@desktop';
import { withThemeNormal } from '../_theme/Link_theme_normal@desktop';
import { withThemeOuter } from '../_theme/Link_theme_outer@desktop';
import { withThemePseudo } from '../_theme/Link_theme_pseudo@desktop';
import { withThemeStrong } from '../_theme/Link_theme_strong@desktop';
// _view
import { withViewDefault } from '../_view/Link_view_default@desktop';

export * from '../Link@desktop';

export const Link = compose(
    withPseudo,
    withViewDefault,
    composeU(withThemeBlack, withThemeGhost, withThemeNormal, withThemeOuter, withThemePseudo, withThemeStrong),
)(LinkDesktop);
