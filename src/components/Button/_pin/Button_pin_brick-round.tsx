import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_brick-round.css';

export interface IButtonPinBrickRoundProps {
    /**
     * Форма кнопки
     */
    pin?: 'brick-round';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinBrickRoundProps} props
 */
export const withPinBrickRound = withBemMod<IButtonPinBrickRoundProps>(cnButton(), { pin: 'brick-round' });
