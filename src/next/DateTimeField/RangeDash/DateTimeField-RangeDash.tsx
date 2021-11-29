import React, { FC } from 'react';
import { usePress } from 'web-platform-alpha';
import { useFocusManager } from 'web-platform-alpha/libs/focus';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField-RangeDash.css';

export const DateTimeFieldRangeDash: FC = () => {
    const { focusNext } = useFocusManager();
    const { pressProps } = usePress({
        onPressStart: (event) => {
            if (event.source === 'mouse') {
                focusNext({ from: event.target as HTMLElement, tabbable: true });
            }
        },
    });

    return <span {...pressProps} className={cnDateTimeField('RangeDash')} role="presentation" />;
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeFieldRangeDash.displayName = 'DateTimeFieldRangeDash';
}
