import React, { forwardRef } from 'react';

import { useRenderOverride } from '../lib/render-override';
import { useMonthCalendar } from './hooks/useMonthCalendar';
import { CalendarCommonProps } from './Calendar';
import { Cell as CellOriginal } from './Cell';
import { GridAside } from './GridAside';
import { GridBody } from './GridBody';
import { Template } from './Template';

export type MonthProps = CalendarCommonProps & {
    /**
     * Показывать кварталы месяцев
     */
    showQuarterIndexes?: boolean;
};

export const Month = forwardRef<HTMLDivElement, MonthProps>((props, ref) => {
    const {
        currentDate: currentDateProp,
        onMonthClick,
        onYearClick,
        prevHidden,
        nextHidden,
        value,
        onChange,
        showQuarterIndexes,
        shouldDisableDate,
        renderCell,
        className,
    } = props;
    const Cell = useRenderOverride(CellOriginal, renderCell);
    const { cellProps, gridProps, headerProps, isCellDisabled, isCellFocused, quarterIndexes } = useMonthCalendar({
        currentDate: currentDateProp,
        value,
        onChange,
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
            {showQuarterIndexes && <GridAside rows={quarterIndexes} />}
            <GridBody
                {...gridProps}
                renderCell={(month, key) => (
                    <Cell
                        {...cellProps}
                        disabled={isCellDisabled(month.value)}
                        focused={isCellFocused(month.value)}
                        key={key}
                        value={month.value}
                    >
                        {month.title}
                    </Cell>
                )}
            />
        </Template>
    );
});

if (process.env.NODE_ENV !== 'production') {
    Month.displayName = 'Month';
}
