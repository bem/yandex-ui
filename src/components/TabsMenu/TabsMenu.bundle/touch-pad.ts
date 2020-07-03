import { compose, composeU } from '@bem-react/core';

// base
import { TabsMenu as TabsMenuCommon } from '../TabsMenu';
// _layout
import { withLayoutHoriz } from '../_layout/TabsMenu_layout_horiz';
// _size
import { withSizeM } from '../_size/TabsMenu_size_m';
import { withSizeS } from '../_size/TabsMenu_size_s';
// _theme
import { withThemeNormal } from '../_theme/TabsMenu_theme_normal';
// _view
import { withViewDefault } from '../_view/TabsMenu_view_default';

export * from '../TabsMenu';

export const TabsMenu = compose(
    withLayoutHoriz,
    withThemeNormal,
    withViewDefault,
    composeU(withSizeM, withSizeS),
)(TabsMenuCommon);
