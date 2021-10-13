import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_brick-round.css';

export interface DateTimeFieldPinBrickRoundProps {
    /**
     * Форма поля.
     */
    pin?: 'brick-round';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinBrickRoundProps} props
 */
export const withPinBrickRound = createClassNameModifier<DateTimeFieldPinBrickRoundProps>(cnDateTimeField(), {
    pin: 'brick-round',
});
