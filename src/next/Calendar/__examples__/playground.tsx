import React, { useState } from 'react';
import { select, boolean, date, number } from '@storybook/addon-knobs';
import {
    Calendar,
    MultipleCalendar,
    RangeCalendar,
    CalendarBaseProps,
    RangeValue,
} from '@yandex-lego/components/next/Calendar/desktop/bundle';

function dateKnob(name: string, value?: Date, groupId?: string): Date {
    const result = date(name, value, groupId);

    if (typeof result === 'number') {
        return new Date(result);
    }

    return result;
}

const getKnobProps = () => ({
    mode: select('mode', ['single', 'multiple', 'range'], 'single', 'common'),
    view: select('view', ['default', 'brand'], 'default', 'common'),
    viewsCount: number('viewsCount', 2, { min: 1, max: 12, step: 1, range: false }, 'common'),
    size: select('size', ['s', 'm', 'l'], 'm', 'common'),
    min: dateKnob('min', new Date(1900, 0, 1), 'common'),
    max: dateKnob('max', new Date(2900, 0, 1), 'common'),
    autoFocus: boolean('autoFocus', false, 'common'),
    disabled: boolean('disabled', false, 'common'),
    readOnly: boolean('readOnly', false, 'common'),
    defaultFocusedDate: dateKnob('defaultFocusedDate', new Date(), 'common'),
    defaultCalendarView: select('defaultCalendarView', ['day', 'month', 'year'], 'day', 'common'),
    minCalendarView: select('minCalendarView', ['day', 'month', 'year'], 'day', 'common'),
    maxCalendarView: select('maxCalendarView', ['day', 'month', 'year'], 'year', 'common'),
    showDaysOfWeek: boolean('showDaysOfWeek', true, 'day'),
    showOutsideDays: boolean('showOutsideDays', false, 'day'),
    showWeekNumbers: boolean('showWeekNumbers', false, 'day'),
    showQuarters: boolean('showQuarters', false, 'month'),
});

const Single = (props: CalendarBaseProps) => {
    const [value, setValue] = useState<Date>();

    return <Calendar value={value} onChange={setValue} {...props} />;
};

const Multiple = (props: CalendarBaseProps) => {
    const [value, setValue] = useState<Date[]>();

    return <MultipleCalendar value={value} onChange={setValue} {...props} />;
};

const Range = (props: CalendarBaseProps) => {
    const [value, setValue] = useState<RangeValue<Date>>();

    return <RangeCalendar value={value} onChange={setValue} {...props} />;
};

const components = {
    single: Single,
    multiple: Multiple,
    range: Range,
};

export const Playground = () => {
    const { mode, ...props } = getKnobProps();

    const Component = components[mode];

    return <Component {...props} />;
};
