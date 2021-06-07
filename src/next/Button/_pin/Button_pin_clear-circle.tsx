import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_clear-circle.css';

export interface IButtonPinClearCircleProps {
    /**
     * Форма кнопки
     */
    pin?: 'clear-circle';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinClearCircleProps} props
 */
export const withPinClearCircle = createClassNameModifier<IButtonPinClearCircleProps>(cnButton(), { pin: 'clear-circle' });
