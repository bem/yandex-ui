import React, { FC } from 'react';

import { cnDateTimeField } from '../DateTimeField.const';

import './DateTimeField-RangeDash.css';

export const DateTimeFieldRangeDash: FC = () => {
    return <span className={cnDateTimeField('RangeDash')} role="presentation" />;
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeFieldRangeDash.displayName = 'DateTimeFieldRangeDash';
}
