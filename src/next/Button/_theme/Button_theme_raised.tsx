import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_raised.css';

export interface IButtonThemeRaisedProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'raised';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeRaisedProps} props
 *
 * @deprecated Рекомендуется использовать withViewRaised
 */
export const withThemeRaised = createClassNameModifier<IButtonThemeRaisedProps>(cnButton(), { theme: 'raised' });
