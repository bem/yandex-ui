import React, { forwardRef, HTMLAttributes } from 'react';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField-Base.css';

export type DateTimeFieldBaseProps = HTMLAttributes<HTMLDivElement>;

export const DateTimeFieldBase = forwardRef<HTMLDivElement, DateTimeFieldBaseProps>(function DateTimeFieldBase(
    props,
    ref,
) {
    const { className, children, ...otherProps } = props;

    return (
        <div ref={ref} className={cnDateTimeField(null, [className])} {...otherProps} tabIndex={-1}>
            <div className={cnDateTimeField('Box')} />
            <div className={cnDateTimeField('Wrapper')}>{children}</div>
        </div>
    );
});
