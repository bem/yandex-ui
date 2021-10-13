import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_clear-clear.css';

export interface DateTimeFieldPinClearClearProps {
    /**
     * Форма поля.
     */
    pin?: 'clear-clear';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinClearClearProps} props
 */
export const withPinClearClear = createClassNameModifier<DateTimeFieldPinClearClearProps>(cnDateTimeField(), {
    pin: 'clear-clear',
});
