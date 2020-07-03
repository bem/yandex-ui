import { withBemMod } from '@bem-react/core';

import { cnPopup } from '../Popup';
import './Popup_theme_normal.css';

export interface IPopupThemeNormalProps {
    /**
     * Стилевое оформление попапа
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление попапа.
 * @param {IPopupThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<IPopupThemeNormalProps>(cnPopup(), { theme: 'normal' });
