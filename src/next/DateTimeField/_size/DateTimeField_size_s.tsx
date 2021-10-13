import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_size_s.css';

export interface DateTimeFieldSizeSProps {
    /**
     * Размер поля.
     */
    size?: 's';
}

/**
 * Модификатор, отвечающий за размер поля.
 * @param {DateTimeFieldSizeSProps} props
 */
export const withSizeS = createClassNameModifier<DateTimeFieldSizeSProps>(cnDateTimeField(), { size: 's' });
