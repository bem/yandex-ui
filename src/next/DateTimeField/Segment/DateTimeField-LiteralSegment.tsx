import React, { FC, HTMLAttributes } from 'react';
import { DateTimeReadOnlySegment } from 'web-platform-alpha';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField-LiteralSegment.css';

export interface DateTimeFieldLiteralSegmentProps extends HTMLAttributes<HTMLElement> {
    segment: DateTimeReadOnlySegment;
}

export const DateTimeFieldLiteralSegment: FC<DateTimeFieldLiteralSegmentProps> = (props) => {
    const { segment, className, ...otherProps } = props;

    return (
        <span className={cnDateTimeField('LiteralSegment', null, [className])} {...otherProps} role="presentation">
            {segment.text}
        </span>
    );
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeFieldLiteralSegment.displayName = 'DateTimeFieldLiteralSegment';
}
