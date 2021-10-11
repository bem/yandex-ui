import { ComponentProps } from 'react';
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

const enhancer = compose(composeU(withViewBrand, withViewDefault), composeU(withSizeS, withSizeM, withSizeL));

export const Calendar = enhancer(UnstyledCalendar);

export type CalendarProps = ComponentProps<typeof Calendar>;

export const MultipleCalendar = enhancer(UnstyledMultipleCalendar);

export type MultipleCalendarProps = ComponentProps<typeof MultipleCalendar>;

export const RangeCalendar = enhancer(UnstyledRangeCalendar);

export type RangeCalendarProps = ComponentProps<typeof RangeCalendar>;

if (process.env.NODE_ENV !== 'production') {
    Calendar.displayName = 'Bundle(CalendarDesktop)';
    MultipleCalendar.displayName = 'Bundle(MultipleCalendarDesktop)';
    RangeCalendar.displayName = 'Bundle(RangeCalendarDesktop)';
}
