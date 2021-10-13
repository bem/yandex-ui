import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_clear-brick.css';

export interface DateTimeFieldPinClearBrickProps {
    /**
     * Форма поля.
     */
    pin?: 'clear-brick';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinClearBrickProps} props
 */
export const withPinClearBrick = createClassNameModifier<DateTimeFieldPinClearBrickProps>(cnDateTimeField(), {
    pin: 'clear-brick',
});
