import { createClassNameModifier } from '@bem-react/core';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField_size_m.css';

export interface DateTimeFieldSizeMProps {
    /**
     * Размер поля.
     */
    size?: 'm';
}

/**
 * Модификатор, отвечающий за размер поля.
 * @param {DateTimeFieldSizeMProps} props
 */
export const withSizeM = createClassNameModifier<DateTimeFieldSizeMProps>(cnDateTimeField(), { size: 'm' });
