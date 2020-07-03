import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_brick-circle.css';

export interface IButtonPinBrickCircleProps {
    /**
     * Форма кнопки
     */
    pin?: 'brick-circle';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinBrickCircleProps} props
 */
export const withPinBrickCircle = withBemMod<IButtonPinBrickCircleProps>(cnButton(), { pin: 'brick-circle' });
