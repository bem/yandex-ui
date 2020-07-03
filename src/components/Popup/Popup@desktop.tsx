import { withRegistry } from '@bem-react/di';

import { Popup as PopupCommon } from './Popup';
import { popupRegistry } from './Popup.registry/desktop';

export * from './Popup';
export const Popup = withRegistry(popupRegistry)(PopupCommon);
