import React, { FC, useRef } from 'react';
import {
    CalendarState,
    CalendarView,
    useCalendarCell,
    UseCalendarCellProps,
    useDateFormatter,
} from 'web-platform-alpha';

import { RenderOverride, useRenderOverride } from '../../../lib/render-override';
import { DateButton as BaseDateButton, DateButtonProps } from '../DateButton';
import { GridCell } from '../shared';

const CELL_FORMAT_OPTIONS: Record<CalendarView, Intl.DateTimeFormatOptions> = {
    day: { day: 'numeric' },
    month: { month: 'short' },
    year: { year: 'numeric' },
};

export interface DateCellProps extends UseCalendarCellProps {
    state: CalendarState;
    showOutsideDays?: boolean;
    renderCell?: RenderOverride<DateButtonProps>;
}

export const DateCell: FC<DateCellProps> = (props) => {
    const { showOutsideDays, state, value, viewDate, renderCell } = props;
    const { activeView } = state;
    const ref = useRef<HTMLElement>(null);
    const dateFormatter = useDateFormatter(CELL_FORMAT_OPTIONS[activeView]);
    const DateButton = useRenderOverride(BaseDateButton, renderCell);

    const { cellState, cellProps, buttonProps } = useCalendarCell(props, state, ref);
    const {
        isFocused,
        isSelected,
        isToday,
        isWeekend,
        isSameView,
        isDisabled,
        isRangeSelected,
        isRangePreview,
        isSelectionStart,
        isSelectionEnd,
        isRangePreviewStart,
        isRangePreviewEnd,
    } = cellState;
    const children = dateFormatter.format(value);

    return (
        <GridCell className="Calendar-DateCell" {...cellProps}>
            <DateButton
                innerRef={ref}
                {...buttonProps}
                state={state}
                value={value}
                viewDate={viewDate}
                /* TODO: Подумать, нужно ли делать today для месяца и года */
                today={isToday && state.activeView === 'day'}
                weekend={isWeekend}
                outside={!isSameView}
                focused={state.isCalendarFocused && isFocused}
                disabled={isDisabled}
                hidden={!showOutsideDays && !isSameView}
                selected={isSelected}
                rangeSelected={isRangeSelected}
                rangePreview={isRangePreview}
                rangePreviewStart={isRangePreviewStart}
                rangePreviewEnd={isRangePreviewEnd}
                selectionStart={isSelectionStart}
                selectionEnd={isSelectionEnd}
            >
                <span className="Calendar-Date">{children}</span>
            </DateButton>
        </GridCell>
    );
};
