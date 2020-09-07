import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_brick-clear.css';

export interface IButtonPinBrickClearProps {
    /**
     * Форма кнопки
     */
    pin?: 'brick-clear';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinBrickClearProps} props
 */
export const withPinBrickClear = withBemMod<IButtonPinBrickClearProps>(cnButton(), { pin: 'brick-clear' });
