import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_theme_action.css';

export interface IButtonThemeActionProps {
    /**
     * Стилевое оформление кнопки
     */
    theme?: 'action';
}

/**
 * Модификатор, отвечающий за стилевое оформление кнопки.
 * @param {IButtonThemeActionProps} props
 *
 * @deprecated Рекомендуется использовать withViewAction
 */
export const withThemeAction = withBemMod<IButtonThemeActionProps>(cnButton(), { theme: 'action' });
