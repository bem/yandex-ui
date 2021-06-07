import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_size_l.css';

export interface IButtonSizeLProps {
    /**
     * Размер кнопки
     */
    size?: 'l';
}

/**
 * Модификатор, отвечающий за размер кнопки.
 * @param {IButtonSizeLProps} props
 */
export const withSizeL = createClassNameModifier<IButtonSizeLProps>(cnButton(), { size: 'l' });
