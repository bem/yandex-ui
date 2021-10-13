import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_round-clear.css';

export interface DateTimeFieldPinRoundClearProps {
    /**
     * Форма поля.
     */
    pin?: 'round-clear';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinRoundClearProps} props
 */
export const withPinRoundClear = createClassNameModifier<DateTimeFieldPinRoundClearProps>(cnDateTimeField(), {
    pin: 'round-clear',
});
