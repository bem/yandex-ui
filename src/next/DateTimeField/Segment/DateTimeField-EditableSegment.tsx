import React, { FC, HTMLAttributes } from 'react';
import {
    useDateTimeFieldSegment,
    DateTimeEditableSegment,
    UseDateTimeFieldStateResult,
    mergeProps,
} from 'web-platform-alpha';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField-EditableSegment.css';

export interface DateTimeFieldEditableSegmentProps extends HTMLAttributes<HTMLElement> {
    segment: DateTimeEditableSegment;
    state: UseDateTimeFieldStateResult;
}

export const DateTimeFieldEditableSegment: FC<DateTimeFieldEditableSegmentProps> = (props) => {
    const { segment, state, className, ...otherProps } = props;
    const { isDisabled, isPlaceholder, isValid } = segment;
    const { segmentProps } = useDateTimeFieldSegment(props, state);
    const resultProps = mergeProps(otherProps, segmentProps);

    return (
        <span
            className={cnDateTimeField(
                'EditableSegment',
                { placeholder: isPlaceholder, disabled: isDisabled, invalid: !isValid },
                [className],
            )}
            {...resultProps}
        >
            {segment.text}
        </span>
    );
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeFieldEditableSegment.displayName = 'DateTimeFieldEditableSegment';
}
