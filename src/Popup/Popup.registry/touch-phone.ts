import { Registry } from '@bem-react/di';

import { cnPopup } from '../Popup';
import { PopupTail } from '../Tail/Popup-Tail';

export const popupRegistry = new Registry({ id: cnPopup() });

popupRegistry.set('Tail', PopupTail);
