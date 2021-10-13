import React, { FC, HTMLAttributes } from 'react';
import { DateTimeSegment, UseDateTimeFieldStateResult } from 'web-platform-alpha';

import { DateTimeFieldEditableSegment } from './DateTimeField-EditableSegment';
import { DateTimeFieldLiteralSegment } from './DateTimeField-LiteralSegment';

export interface DateTimeFieldSegmentProps extends HTMLAttributes<HTMLElement> {
    segment: DateTimeSegment;
    state: UseDateTimeFieldStateResult;
}

export const DateTimeFieldSegment: FC<DateTimeFieldSegmentProps> = (props) => {
    const { segment, state, ...otherProps } = props;

    if (!segment.isEditable) {
        return <DateTimeFieldLiteralSegment segment={segment} />;
    }

    return <DateTimeFieldEditableSegment {...otherProps} segment={segment} state={state} />;
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeFieldSegment.displayName = 'DateTimeFieldSegment';
}
