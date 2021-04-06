import React, { forwardRef } from 'react';

import { useRenderOverride } from '../lib/render-override';
import { useDayCalendar } from './hooks/useDayCalendar';
import { CalendarCommonProps } from './Calendar';
import { Cell as CellOriginal } from './Cell';
import { GridBody } from './GridBody';
import { Template } from './Template';
import { GridHead } from './GridHead';
import { GridAside } from './GridAside';

export type DayProps = CalendarCommonProps & {
    /**
     * Показывать названия дней недели
     */
    showDayLabels?: boolean;
    /**
     * Показывать дни за пределами текущего месяца
     */
    showExtraDays?: boolean;
    /**
     * Показывать номера недель
     */
    showWeekIndexes?: boolean;
};

export const Day = forwardRef<HTMLDivElement, DayProps>((props, ref) => {
    const {
        className,
        currentDate: currentDateProp,
        nextHidden,
        onChange,
        shouldDisableDate,
        onMonthClick,
        onYearClick,
        prevHidden,
        renderCell,
        showDayLabels,
        showExtraDays,
        showWeekIndexes,
        value,
    } = props;
    const Cell = useRenderOverride(CellOriginal, renderCell);
    const {
        cellProps,
        dayLabels,
        gridProps,
        headerProps,
        isCellCurrent,
        isCellDisabled,
        isCellFocused,
        isCellHidden,
        weekIndexes,
    } = useDayCalendar({ showExtraDays, currentDate: currentDateProp, onChange, value, shouldDisableDate });

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
            {showDayLabels && <GridHead columns={dayLabels} />}
            {showWeekIndexes && <GridAside rows={weekIndexes} />}
            <GridBody
                {...gridProps}
                renderCell={(cell, key) => (
                    <Cell
                        {...cellProps}
                        current={isCellCurrent(cell.value)}
                        disabled={isCellDisabled(cell.value)}
                        focused={isCellFocused(cell.value)}
                        hidden={isCellHidden(cell.value)}
                        key={key}
                        value={cell.value}
                    >
                        {cell.title}
                    </Cell>
                )}
            />
        </Template>
    );
});

if (process.env.NODE_ENV !== 'production') {
    Day.displayName = 'Day';
}
