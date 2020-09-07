import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_theme_clear.css';

export interface IPopupThemeClearProps {
    /**
     * Стилевое оформление попапа
     */
    theme?: 'clear';
}

/**
 * Модификатор, отвечающий за стилевое оформление попапа.
 * @param {IPopupThemeClearProps} props
 */
export const withThemeClear = withBemMod<IPopupThemeClearProps>(cnPopup(), { theme: 'clear' });
