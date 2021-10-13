import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_view_default.css';

export interface DateTimeFieldViewDefaultProps {
    /**
     * Внешний вид поля.
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид поля.
 * @param {DateTimeFieldViewDefaultProps} props
 */
export const withViewDefault = createClassNameModifier<DateTimeFieldViewDefaultProps>(cnDateTimeField(), {
    view: 'default',
});
