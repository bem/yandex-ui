import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_view_default.css';

export interface IPopupViewDefaultProps {
    /**
     * Внешний вид попапа
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид попапа.
 * @param {IPopupViewDefaultProps} props
 */
export const withViewDefault = withBemMod<IPopupViewDefaultProps>(cnPopup(), { view: 'default' });
