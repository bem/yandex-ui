import { BaseCalendarProps, DayOfWeek } from 'web-platform-alpha';

import { RenderOverride } from '../../lib/render-override';
import { DateButtonProps } from './DateButton';
export type { RangeValue, DateRangeValue } from 'web-platform-alpha';

export interface CalendarBaseProps extends BaseCalendarProps {
    showOutsideDays?: boolean;
    showDaysOfWeek?: boolean;
    showQuarters?: boolean;
    showWeekNumbers?: boolean;
    firstDayOfWeek?: DayOfWeek;
    renderCell?: RenderOverride<DateButtonProps>;
}
