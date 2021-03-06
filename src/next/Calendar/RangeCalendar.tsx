import React, { FC } from 'react';
import { ValueProps, useRangeCalendarState } from 'web-platform-alpha';

import { BaseCalendar } from './BaseCalendar';
import { CalendarBaseProps, RangeValue } from './types';

export type RangeCalendarProps = CalendarBaseProps & ValueProps<RangeValue<Date>>;

export const RangeCalendar: FC<RangeCalendarProps> = (props) => {
    const state = useRangeCalendarState(props);

    return <BaseCalendar {...props} state={state} />;
};
