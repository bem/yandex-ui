import { compose, composeU } from '@bem-react/core';

import {
    Calendar as UnstyledCalendar,
    RangeCalendar as UnstyledRangeCalendar,
    MultipleCalendar as UnstyledMultipleCalendar,
    withSizeL,
    withSizeM,
    withSizeS,
    withViewDefault,
    withViewBrand,
} from '.';

export * from '.';

const enhancer = compose(composeU(withViewDefault, withViewBrand), composeU(withSizeS, withSizeM, withSizeL));

export const Calendar = enhancer(UnstyledCalendar);

export const MultipleCalendar = enhancer(UnstyledMultipleCalendar);

export const RangeCalendar = enhancer(UnstyledRangeCalendar);

if (process.env.NODE_ENV !== 'production') {
    Calendar.displayName = 'Bundle(CalendarTouchPhone)';
    MultipleCalendar.displayName = 'Bundle(MultipleCalendarTouchPhone)';
    RangeCalendar.displayName = 'Bundle(RangeCalendarTouchPhone)';
}
