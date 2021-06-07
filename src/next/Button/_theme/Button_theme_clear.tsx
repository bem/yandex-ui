import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_clear.css';

export interface IButtonThemeClearProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'clear';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeClearProps} props
 *
 * @deprecated Рекомендуется использовать withViewClear
 */
export const withThemeClear = createClassNameModifier<IButtonThemeClearProps>(cnButton(), { theme: 'clear' });
