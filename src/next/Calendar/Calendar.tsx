import React, { FC } from 'react';
import { ValueProps, useSingleCalendarState } from 'web-platform-alpha';

import { BaseCalendar } from './BaseCalendar';
import { CalendarBaseProps } from './types';

export type CalendarProps = CalendarBaseProps & ValueProps<Date>;

export const Calendar: FC<CalendarProps> = (props) => {
    const state = useSingleCalendarState(props);

    return <BaseCalendar {...props} state={state} />;
};
