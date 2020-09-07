import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_width_auto.css';

export interface IButtonWidthAutoProps {
    /**
     * Ширина кнопки
     */
    width?: 'auto';
}

/**
 * Модификатор, отвечающий за автоматическую ширину кнопки.
 * @param {IButtonWidthAutoProps} props
 */
export const withWidthAuto = withBemMod<IButtonWidthAutoProps>(cnButton(), { width: 'auto' });
