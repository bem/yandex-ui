import { compose } from '@bem-react/core';

// base
import { Drawer as DrawerTouchPhone } from '../../Drawer@touch-phone';
// _view
import { withViewDefault } from '../../_view/Drawer_view_default';

export * from '../../Drawer@touch-phone';

export const Drawer = compose(withViewDefault)(DrawerTouchPhone);
