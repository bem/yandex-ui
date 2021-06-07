import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_size_s.css';

export interface IButtonSizeSProps {
    /**
     * Размер кнопки
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер кнопки.
 * @param {IButtonSizeSProps} props
 */
export const withSizeS = createClassNameModifier<IButtonSizeSProps>(cnButton(), { size: 's' });
