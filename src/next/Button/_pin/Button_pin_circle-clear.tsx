import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_pin_circle-clear.css';

export interface IButtonPinCircleClearProps {
    /**
     * Форма кнопки
     */
    pin?: 'circle-clear';
}

/**
 * Модификатор, отвечающий за форму кнопки.
 * Используется для группировки кнопок поля с другими компонентами.
 * @param {IButtonPinCircleClearProps} props
 */
export const withPinCircleClear = createClassNameModifier<IButtonPinCircleClearProps>(cnButton(), { pin: 'circle-clear' });
