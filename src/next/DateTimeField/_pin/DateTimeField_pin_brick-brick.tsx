import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_pin_brick-brick.css';

export interface DateTimeFieldPinBrickBrickProps {
    /**
     * Форма поля.
     */
    pin?: 'brick-brick';
}

/**
 * Модификатор, отвечающий за форму поля.
 * Используется для группировки поля с другими блоками, например, с кнопками.
 * @param {DateTimeFieldPinBrickBrickProps} props
 */
export const withPinBrickBrick = createClassNameModifier<DateTimeFieldPinBrickBrickProps>(cnDateTimeField(), {
    pin: 'brick-brick',
});
