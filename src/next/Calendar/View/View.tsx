import React, { FC, ReactNode, useMemo } from 'react';
import { getWeek } from 'web-platform-alpha/libs/date';
import { CalendarState, CalendarView, DayOfWeek, useCalendar, useFirstDayOfWeek } from 'web-platform-alpha';

import { cnCalendar } from '../Calendar.const';
import { DateCell } from '../DateCell';
import { DaysOfWeek } from '../DaysOfWeek';
import { Navigation } from '../Navigation';
import { Grid, GridCell, GridRow, GridSection } from '../shared';
import { CalendarBaseProps, RangeValue } from '../types';

import './View.css';

export interface ViewProps extends CalendarBaseProps {
    state: CalendarState;
    viewDate: Date;
    viewRange: RangeValue<Date>;
    data: Date[][];
    index: number;
}

export const View: FC<ViewProps> = (props) => {
    const {
        showDaysOfWeek = true,
        showOutsideDays,
        showWeekNumbers,
        showQuarters,
        viewDate,
        viewRange,
        data,
        state,
        index,
        viewsCount = 1,
        renderCell,
    } = props;
    const { activeView } = state;
    const { gridProps } = useCalendar(props, state);
    const firstDayOfWeek = useFirstDayOfWeek();
    const asideData = useMemo(() => getAsideData(activeView, data, firstDayOfWeek), [activeView, data, firstDayOfWeek]);
    const showAside = (activeView === 'day' && showWeekNumbers) || (activeView === 'month' && showQuarters);

    return (
        <div className={cnCalendar('View', { type: activeView })}>
            <div className={cnCalendar('Header')}>
                <Navigation
                    state={state}
                    viewRange={viewRange}
                    prevHidden={index > 0}
                    nextHidden={index < viewsCount - 1}
                />

                {showDaysOfWeek && activeView === 'day' && (
                    <DaysOfWeek showWeekNumbers={showWeekNumbers} daysOfWeek={data[0]} />
                )}
            </div>

            <div className={cnCalendar('Body')}>
                <Grid {...gridProps}>
                    {showAside && (
                        <GridSection type="aside">
                            {asideData.map((value, rowIndex) => (
                                <GridRow key={rowIndex}>
                                    <GridCell>{value}</GridCell>
                                </GridRow>
                            ))}
                        </GridSection>
                    )}

                    <GridSection type="body">
                        {data.map((row, rowIndex) => (
                            <GridRow key={rowIndex} role="row">
                                {row.map((value, cellIndex) => (
                                    <DateCell
                                        key={`${rowIndex}-${cellIndex}`}
                                        state={state}
                                        value={value}
                                        viewDate={viewDate}
                                        showOutsideDays={showOutsideDays}
                                        renderCell={renderCell}
                                    />
                                ))}
                            </GridRow>
                        ))}
                    </GridSection>
                </Grid>
            </div>
        </div>
    );
};

if (process.env.NODE_ENV !== 'production') {
    View.displayName = 'View';
}

const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4'];

function getAsideData(view: CalendarView, data: Date[][], firstDayOfWeek: DayOfWeek): ReactNode[] {
    if (view === 'month') {
        return QUARTERS;
    }

    if (view === 'day') {
        return data.map((row) => getWeek(row[0], { weekStartsOn: firstDayOfWeek }));
    }

    return [];
}
