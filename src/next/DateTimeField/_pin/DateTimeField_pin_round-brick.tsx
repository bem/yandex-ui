import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_round-brick.css';

export interface DateTimeFieldPinRoundBrickProps {
    /**
     * Форма поля.
     */
    pin?: 'round-brick';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinRoundBrickProps} props
 */
export const withPinRoundBrick = createClassNameModifier<DateTimeFieldPinRoundBrickProps>(cnDateTimeField(), {
    pin: 'round-brick',
});
