import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_round-clear.css';

export interface IButtonPinRoundClearProps {
    /**
     * Форма кнопки
     */
    pin?: 'round-clear';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinRoundClearProps} props
 */
export const withPinRoundClear = withBemMod<IButtonPinRoundClearProps>(cnButton(), { pin: 'round-clear' });
