import { compose, composeU } from '@bem-react/core';

// base
import { Link as LinkCommon } from '../../Link';
// _pseudo
import { withPseudo } from '../../_pseudo/Link_pseudo';
// _theme
import { withThemeBlack } from '../../_theme/Link_theme_black';
import { withThemeGhost } from '../../_theme/Link_theme_ghost';
import { withThemeNormal } from '../../_theme/Link_theme_normal';
import { withThemeOuter } from '../../_theme/Link_theme_outer';
import { withThemePseudo } from '../../_theme/Link_theme_pseudo';
import { withThemeStrong } from '../../_theme/Link_theme_strong';
// _view
import { withViewDefault } from '../../_view/Link_view_default';

export * from '../../Link';

export const Link = compose(
    withPseudo,
    withViewDefault,
    composeU(withThemeBlack, withThemeGhost, withThemeNormal, withThemeOuter, withThemePseudo, withThemeStrong),
)(LinkCommon);
