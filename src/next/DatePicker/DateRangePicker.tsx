import { ComponentProps } from 'react';
import { useDateRangePickerState } from 'web-platform-alpha';

import { DateTimeRangeField } from '../DateTimeField/desktop/bundle';
import { RangeCalendar } from '../Calendar/desktop/bundle';
import { createDatePicker } from './createDatePicker';

export type DateRangePickerProps = ComponentProps<typeof DateRangePicker>;

export const DateRangePicker = createDatePicker({
    displayName: 'DateRangePicker',
    defaultProps: {
        size: 'm',
        view: 'default',
    },
    hooks: {
        useDatePickerState: useDateRangePickerState,
    },
    slots: {
        DateField: DateTimeRangeField,
        Calendar: RangeCalendar,
    },
});
