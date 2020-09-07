import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_nonvisual.css';

export interface IPopupNonvisualProps {
    /**
     * Убирает стили попапа влияющие на визуальный стиль
     */
    nonvisual?: boolean;
}

/**
 * Модификатор который убирает стили попапа влияющие на визуальный стиль.
 * @param {IPopupNonvisualProps} props
 */
export const withNonvisual = withBemMod<IPopupNonvisualProps>(cnPopup(), { nonvisual: true });
