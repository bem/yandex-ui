import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_clear-round.css';

export interface DateTimeFieldPinClearRoundProps {
    /**
     * Форма поля.
     */
    pin?: 'clear-round';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinClearRoundProps} props
 */
export const withPinClearRound = createClassNameModifier<DateTimeFieldPinClearRoundProps>(cnDateTimeField(), {
    pin: 'clear-round',
});
