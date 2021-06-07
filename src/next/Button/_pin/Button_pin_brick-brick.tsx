import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_brick-brick.css';

export interface IButtonPinBrickBrickProps {
    /**
     * Форма кнопки
     */
    pin?: 'brick-brick';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinBrickBrickProps} props
 */
export const withPinBrickBrick = createClassNameModifier<IButtonPinBrickBrickProps>(cnButton(), { pin: 'brick-brick' });
