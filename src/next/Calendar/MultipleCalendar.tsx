import React, { FC } from 'react';
import { DateInputValueProps, useMultipleCalendarState } from 'web-platform-alpha';

import { BaseCalendar } from './BaseCalendar';
import { CalendarBaseProps } from './types';

export type MultipleCalendarProps = CalendarBaseProps & DateInputValueProps<Date[]>;

export const MultipleCalendar: FC<MultipleCalendarProps> = (props) => {
    const state = useMultipleCalendarState(props);

    return <BaseCalendar {...props} state={state} />;
};
