import { compose, composeU, ExtractProps } from '@bem-react/core';

// base
import { Menu as MenuDesktop } from '../../Menu@desktop';
// _size
import { withSizeM } from '../../_size/Menu_size_m';
import { withSizeS } from '../../_size/Menu_size_s';
// _theme
import { withThemeNormal } from '../../_theme/Menu_theme_normal@desktop';
// _view
import { withViewDefault } from '../../_view/Menu_view_default@desktop';
// _width
import { withWidthAuto } from '../../_width/Menu_width_auto';
import { withWidthMax } from '../../_width/Menu_width_max';
// _jsxContent
import { withJsxContent } from '../../_jsxContent/Menu_jsxContent';

export * from '../../Menu@desktop';

export const Menu = compose(
    composeU(withSizeM, withSizeS),
    composeU(withWidthAuto, withWidthMax),
    withViewDefault,
    withThemeNormal,
)(withJsxContent(MenuDesktop));

export type IMenuProps = ExtractProps<typeof Menu>;
