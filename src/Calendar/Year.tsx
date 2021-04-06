import React, { forwardRef } from 'react';

import { useRenderOverride } from '../lib/render-override';
import { useYearCalendar } from './hooks/useYearCalendar';
import { CalendarCommonProps } from './Calendar';
import { Cell as CellOriginal } from './Cell';
import { GridBody } from './GridBody';
import { Template } from './Template';

export type YearProps = CalendarCommonProps;

export const Year = forwardRef<HTMLDivElement, YearProps>((props, ref) => {
    const {
        currentDate: currentDateProp,
        value,
        onChange,
        shouldDisableDate,
        renderCell,
        className,
        onMonthClick,
        onYearClick,
        prevHidden,
        nextHidden,
    } = props;
    const Cell = useRenderOverride(CellOriginal, renderCell);
    const { cellProps, gridProps, headerProps, isCellDisabled, isCellFocused } = useYearCalendar({
        currentDate: currentDateProp,
        onChange,
        value,
        shouldDisableDate,
    });

    return (
        <Template
            {...headerProps}
            className={className}
            nextHidden={nextHidden}
            onMonthClick={onMonthClick}
            onYearClick={onYearClick}
            prevHidden={prevHidden}
            ref={ref}
        >
            <GridBody
                {...gridProps}
                renderCell={(year, key) => (
                    <Cell
                        {...cellProps}
                        disabled={isCellDisabled(year.value)}
                        focused={isCellFocused(year.value)}
                        key={key}
                        value={year.value}
                    >
                        {year.title}
                    </Cell>
                )}
            />
        </Template>
    );
});

if (process.env.NODE_ENV !== 'production') {
    Year.displayName = 'Year';
}
