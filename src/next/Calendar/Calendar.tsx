import React, { FC } from 'react';
import { DateInputValueProps, DateValue, useSingleCalendarState } from 'web-platform-alpha';

import { BaseCalendar } from './BaseCalendar';
import { CalendarBaseProps } from './types';

export type CalendarProps = CalendarBaseProps & DateInputValueProps<DateValue, Date>;

export const Calendar: FC<CalendarProps> = (props) => {
    const state = useSingleCalendarState(props);

    return <BaseCalendar {...props} state={state} />;
};
