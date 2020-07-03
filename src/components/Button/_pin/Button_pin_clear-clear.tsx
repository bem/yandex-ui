import { withBemMod } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_clear-clear.css';

export interface IButtonPinClearClearProps {
    /**
     * Форма кнопки
     */
    pin?: 'clear-clear';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinClearClearProps} props
 */
export const withPinClearClear = withBemMod<IButtonPinClearClearProps>(cnButton(), { pin: 'clear-clear' });
