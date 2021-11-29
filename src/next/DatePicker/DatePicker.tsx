import { ComponentProps } from 'react';
import { useDatePickerState } from 'web-platform-alpha';

import { DateTimeField } from '../DateTimeField/desktop/bundle';
import { Calendar } from '../Calendar/desktop/bundle';
import { createDatePicker } from './createDatePicker';

export type DatePickerProps = ComponentProps<typeof DatePicker>;

export const DatePicker = createDatePicker({
    displayName: 'DatePicker',
    defaultProps: {
        size: 'm',
        view: 'default',
    },
    hooks: {
        useDatePickerState: useDatePickerState,
    },
    slots: {
        Calendar: Calendar,
        DateField: DateTimeField,
    },
});
