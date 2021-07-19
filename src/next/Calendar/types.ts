import { BaseCalendarProps } from 'web-platform-alpha';

import { RenderOverride } from '../../lib/render-override';
import { DateButtonProps } from './DateButton';

export type { RangeValue } from 'web-platform-alpha';

export interface CalendarBaseProps extends BaseCalendarProps {
    showOutsideDays?: boolean;
    showDaysOfWeek?: boolean;
    showQuarters?: boolean;
    showWeekNumbers?: boolean;
    renderCell?: RenderOverride<DateButtonProps>;
}
