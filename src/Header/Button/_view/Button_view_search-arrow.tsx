import { withBemMod } from '@bem-react/core';

import { cnButton } from '../../../Button';
import './Button_view_search-arrow.css';

export interface ButtonViewSearchArrowProps {
    /**
     * Стилевое оформление кнопки
     */
    view?: 'search-arrow';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки в поиске внутри шапки.
 * @param {ButtonViewSearchArrowProps} props
 *
 */
export const withViewSearchArrow = withBemMod<ButtonViewSearchArrowProps>(cnButton(), { view: 'search-arrow' });
