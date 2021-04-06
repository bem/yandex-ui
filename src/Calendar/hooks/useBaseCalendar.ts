import { KeyboardEventHandler, useCallback, useRef, useState } from 'react';
import { compareAsc } from 'date-fns';

import { CalendarCellProps } from '../Cell';
import { CalendarType, DateValue } from '../Calendar';

export type GridData = Array<Array<{ title: string; value: Date }>>;

export type CalendarHookProps = {
    currentDate?: Date;
    onChange?: (event: any, date: DateValue) => void;
    value: DateValue;
    shouldDisableDate?: (date: Date, type: CalendarType) => boolean;
};

export type CalendarHookResult = {
    gridProps: {
        data: GridData;
        onKeyDown: KeyboardEventHandler<HTMLDivElement>;
    };
    cellProps: Pick<
        CalendarCellProps,
        | 'current'
        | 'disabled'
        | 'focused'
        | 'hidden'
        | 'hoveredDate'
        | 'onChange'
        | 'onFocus'
        | 'onMouseEnter'
        | 'onMouseLeave'
    >;
    isCellFocused: (cellDate: Date) => boolean;
    isCellDisabled: (cellDate: Date) => boolean;
    currentDate: Date;
};

export type UseBaseCalendarProps = {
    currentDate?: Date;
    onChange?: (event: any, date: DateValue) => void;
    value: DateValue;
};

export function useBaseCalendar(props: UseBaseCalendarProps) {
    const { currentDate: currentDateProp = new Date(), onChange, value } = props;
    const focusedDateRef = useRef<Date | null>(null);

    const [currentDate, setCurrentDate] = useState(currentDateProp);
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
    const [focusedDate, setFocusedDate] = useState<Date | null>(null);

    const isRange = Array.isArray(value);

    const onCellFocus = useCallback((_, date: Date) => {
        focusedDateRef.current = date;
    }, []);

    const onCellHover = useCallback(
        (_, date: Date) => {
            if (Array.isArray(value) && value.length === 2) {
                return;
            }
            setHoveredDate(date);
        },
        [value],
    );

    const onCellLeave = useCallback(() => {
        setHoveredDate(null);
    }, []);

    const onCellChange = useCallback(
        (event, date) => {
            if (!onChange) return;
            let nextDate = date;

            if (Array.isArray(value)) {
                if (value.length === 1) {
                    nextDate = [date, value[0]].sort(compareAsc);
                } else {
                    nextDate = [date];
                }
            }

            onChange(event, nextDate);
        },
        [onChange, value],
    );

    return {
        hoveredDate,
        focusedDate,
        focusedDateRef,
        currentDate,
        setFocusedDate,
        setCurrentDate,
        cellProps: {
            onMouseEnter: isRange ? onCellHover : null,
            onMouseLeave: isRange ? onCellLeave : null,
            onFocus: onCellFocus,
            onChange: onCellChange,
        },
    };
}
