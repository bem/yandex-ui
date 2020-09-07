import { Registry } from '@bem-react/di';

import { Popup } from '../../Popup/touch-phone';
import { cnDrawer } from '../Drawer.const';

export const DrawerRegistry = new Registry({ id: cnDrawer() });

DrawerRegistry.set('Popup', Popup);
