import React, { forwardRef } from 'react';
import { useDateTimeField, UseDateTimeFieldProps, UseDateTimeFieldStateResult } from 'web-platform-alpha';

import { cnDateTimeField } from '../DateTimeField.const';
import { DateTimeFieldSegment } from '../Segment';

import './DateTimeField-Control.css';

export interface DateTimeFieldControlProps extends UseDateTimeFieldProps {
    className?: string;
    state: UseDateTimeFieldStateResult;
}

export const DateTimeFieldControl = forwardRef<HTMLElement, DateTimeFieldControlProps>(function DateTimeFieldControl(
    props,
    ref,
) {
    const { className, state, ...otherProps } = props;
    const { fieldProps, segmentProps } = useDateTimeField(otherProps);

    return (
        <span ref={ref} className={cnDateTimeField('Control', null, [className])} {...fieldProps}>
            {state.segments.map((segment, index) => {
                return <DateTimeFieldSegment key={index} segment={segment} state={state} {...segmentProps} />;
            })}
        </span>
    );
});
