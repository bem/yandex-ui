import { withRegistry } from '@bem-react/di';

import { Drawer as DrawerCommon } from './Drawer';
import { DrawerRegistry } from './Drawer.registry/touch-phone';

export * from './Drawer';
export const Drawer = withRegistry(DrawerRegistry)(DrawerCommon);
