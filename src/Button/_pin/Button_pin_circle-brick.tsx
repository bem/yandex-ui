import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_circle-brick.css';

export interface IButtonPinCircleBrickProps {
    /**
     * Форма кнопки
     */
    pin?: 'circle-brick';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinCircleBrickProps} props
 */
export const withPinCircleBrick = withBemMod<IButtonPinCircleBrickProps>(cnButton(), { pin: 'circle-brick' });
