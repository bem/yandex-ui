import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_clear-brick.css';

export interface IButtonPinClearBrickProps {
    /**
     * Форма кнопки
     */
    pin?: 'clear-brick';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinClearBrickProps} props
 */
export const withPinClearBrick = withBemMod<IButtonPinClearBrickProps>(cnButton(), { pin: 'clear-brick' });
