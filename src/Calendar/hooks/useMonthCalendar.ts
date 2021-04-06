import { addMonths, addYears, isSameMonth, setMonth, subMonths, subYears } from 'date-fns';
import { KeyboardEvent, useCallback, useMemo } from 'react';

import { useDateFormatter, useLocale } from '../../i18n';
import { GridData, CalendarHookProps, useBaseCalendar } from './useBaseCalendar';

export function useMonthCalendar(props: CalendarHookProps) {
    const { currentDate: currentDateProp, onChange, value, shouldDisableDate } = props;
    const {
        cellProps,
        currentDate,
        focusedDate,
        focusedDateRef,
        hoveredDate,
        setCurrentDate,
        setFocusedDate,
    } = useBaseCalendar({ currentDate: currentDateProp, onChange, value });
    const { isRTL } = useLocale();
    const { monthGrid } = useMonthGrid(currentDate);

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (focusedDateRef.current === null) {
                return;
            }

            let nextFocusedDate = focusedDateRef.current;

            const findPrevActiveMonth = (date: Date): Date => {
                const nextDate = subMonths(date, 1);
                if (shouldDisableDate?.(nextDate, 'month')) {
                    return findPrevActiveMonth(nextDate);
                }
                return nextDate;
            };

            const findNextActiveMonth = (date: Date): Date => {
                const nextDate = addMonths(date, 1);
                if (shouldDisableDate?.(nextDate, 'month')) {
                    return findNextActiveMonth(nextDate);
                }
                return nextDate;
            };

            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    nextFocusedDate = isRTL
                        ? findNextActiveMonth(nextFocusedDate)
                        : findPrevActiveMonth(nextFocusedDate);
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    nextFocusedDate = isRTL
                        ? findPrevActiveMonth(nextFocusedDate)
                        : findNextActiveMonth(nextFocusedDate);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    nextFocusedDate = subMonths(nextFocusedDate, GRID_SIZE[0]);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    nextFocusedDate = addMonths(nextFocusedDate, GRID_SIZE[0]);
                    break;
            }

            // FIXME: Не идеальное решение, т.к. мы повторно
            // проверяем дату на валидность, нужно придумать решение лучше.
            if (shouldDisableDate?.(nextFocusedDate, 'month')) {
                return;
            }

            setFocusedDate(nextFocusedDate);
        },
        [focusedDateRef, isRTL, shouldDisableDate, setFocusedDate],
    );

    const onCellChange = useCallback(
        (event, date: Date) => {
            // Для обычного сценария в месяц-календаре мы изменяем месяц и год, но не трогаем дату.
            if (value && !Array.isArray(value)) {
                const nextDate = new Date(value);
                nextDate.setMonth(date.getMonth());
                nextDate.setFullYear(date.getFullYear());
                cellProps.onChange(event, nextDate);
            } else {
                cellProps.onChange(event, date);
            }
        },
        [cellProps, value],
    );

    const onPrevClick = useCallback(() => {
        setFocusedDate(null);
        setCurrentDate(subYears(currentDate, 1));
    }, [currentDate, setFocusedDate, setCurrentDate]);

    const onNextClick = useCallback(() => {
        setFocusedDate(null);
        setCurrentDate(addYears(currentDate, 1));
    }, [currentDate, setFocusedDate, setCurrentDate]);

    return {
        quarterIndexes: QUARTER_INDEXES,
        headerProps: {
            currentDate,
            onNextClick,
            onPrevClick,
        },
        gridProps: {
            data: monthGrid,
            onKeyDown,
        },
        cellProps: {
            ...cellProps,
            hoveredDate,
            onChange: onCellChange,
            selectedRange: value,
            type: 'month' as const,
        },
        isCellFocused: (cellDate: Date) => {
            return focusedDate ? isSameMonth(focusedDate, cellDate) : false;
        },
        isCellDisabled: (cellDate: Date) => {
            return shouldDisableDate ? shouldDisableDate(cellDate, 'month') : false;
        },
    };
}

const QUARTER_INDEXES = ['Q1', 'Q2', 'Q3', 'Q4'];
const GRID_SIZE = [3, 4];
const GRID_TOTAL_SIZE = GRID_SIZE[0] * GRID_SIZE[1];

function useMonthGrid(anchorDate: Date) {
    const monthFormatter = useDateFormatter({ month: 'short' });

    return useMemo(() => {
        const monthGrid: GridData = [];

        for (let y = 0, index = 0; y < GRID_SIZE[1]; y++) {
            monthGrid.push([]);

            for (let x = 0; x < GRID_SIZE[0]; x++) {
                const value = setMonth(anchorDate, index++ % GRID_TOTAL_SIZE);

                monthGrid[y].push({ value, title: monthFormatter.format(value) });
            }
        }

        return { monthGrid };
    }, [anchorDate, monthFormatter]);
}
