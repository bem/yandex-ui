import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_clear-round.css';

export interface IButtonPinClearRoundProps {
    /**
     * Форма кнопки
     */
    pin?: 'clear-round';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinClearRoundProps} props
 */
export const withPinClearRound = withBemMod<IButtonPinClearRoundProps>(cnButton(), { pin: 'clear-round' });
