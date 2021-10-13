import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_brick-clear.css';

export interface DateTimeFieldPinBrickClearProps {
    /**
     * Форма поля.
     */
    pin?: 'brick-clear';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinBrickClearProps} props
 */
export const withPinBrickClear = createClassNameModifier<DateTimeFieldPinBrickClearProps>(cnDateTimeField(), {
    pin: 'brick-clear',
});
