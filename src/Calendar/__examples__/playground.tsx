import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { unstable_Calendar as Calendar, useCalendarState } from '@yandex-lego/components/Calendar/desktop/bundle';

const getKnobProps = () => ({
    size: select('size', ['s', 'm', 'l'], 'm'),
    type: select('type', ['day', 'month', 'year'], 'day'),
    showDayLabels: boolean('showDayLabels (day only)', false),
    showExtraDays: boolean('showExtraDays (day only)', false),
    showWeekIndexes: boolean('showWeekIndexes (day only)', false),
    showQuarterIndexes: boolean('showQuarterIndexes (month onlt)', false),
});

export const Playground = () => {
    const calendarState = useCalendarState();
    const props = getKnobProps();

    return <Calendar {...calendarState} {...props} view="default" />;
};
