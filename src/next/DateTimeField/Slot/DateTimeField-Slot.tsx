import React, { forwardRef, HTMLAttributes } from 'react';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField-Slot.css';

export interface DateTimeFieldSlotProps extends HTMLAttributes<HTMLSpanElement> {
    name: 'before' | 'control' | 'after';
}

export const DateTimeFieldSlot = forwardRef<HTMLSpanElement, DateTimeFieldSlotProps>(function DateTimeFieldSlot(
    props,
    ref,
) {
    const { children, className, name, ...otherProps } = props;

    return (
        <span ref={ref} className={cnDateTimeField('Slot', { name }, [className])} {...otherProps}>
            {children}
        </span>
    );
});
