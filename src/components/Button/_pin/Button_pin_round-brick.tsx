import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_round-brick.css';

export interface IButtonPinRoundBrickProps {
    /**
     * Форма кнопки
     */
    pin?: 'round-brick';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinRoundBrickProps} props
 */
export const withPinRoundBrick = withBemMod<IButtonPinRoundBrickProps>(cnButton(), { pin: 'round-brick' });
