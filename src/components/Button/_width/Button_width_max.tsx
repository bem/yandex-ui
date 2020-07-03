import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_width_max.css';

export interface IButtonWidthMaxProps {
    /**
     * Ширина кнопки
     */
    width?: 'max';
}

/**
 * Модификатор, отвечающий за максимальную ширину кнопки.
 * @param {IButtonWidthMaxProps} props
 */
export const withWidthMax = withBemMod<IButtonWidthMaxProps>(cnButton(), { width: 'max' });
