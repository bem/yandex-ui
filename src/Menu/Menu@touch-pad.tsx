import { withRegistry } from '@bem-react/di';

import { Menu as MenuCommon } from './Menu';
import { menuRegistry } from './Menu.registry/touch-pad';

export * from './Menu';
export const Menu = withRegistry(menuRegistry)(MenuCommon);
