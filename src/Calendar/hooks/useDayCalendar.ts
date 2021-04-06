import {
    startOfMonth,
    addDays,
    subDays,
    addMonths,
    subMonths,
    addYears,
    subYears,
    addWeeks,
    subWeeks,
    endOfWeek,
    startOfWeek,
    isSameDay,
    setDay,
    isSameYear,
    isSameMonth,
    getWeek,
    getDaysInMonth,
} from 'date-fns';
import { KeyboardEvent, useCallback, useEffect, useMemo } from 'react';

import { useDateFormatter, useLocale } from '../../i18n';
import { WeekStart, useWeekStart } from './useWeekStart';
import { GridData, CalendarHookProps, useBaseCalendar } from './useBaseCalendar';

type DayCalendarHookProps = CalendarHookProps & { showExtraDays?: boolean };

export function useDayCalendar(props: DayCalendarHookProps) {
    // TODO: Возможно тут стоит сделать оптимизацию и не создавать dayLabels и weekIndexes если флаг не установлен.
    const { currentDate: currentDateProp, onChange, value, shouldDisableDate, showExtraDays } = props;
    const {
        hoveredDate,
        currentDate,
        setCurrentDate,
        focusedDate,
        setFocusedDate,
        focusedDateRef,
        cellProps,
    } = useBaseCalendar({ currentDate: currentDateProp, value, onChange });
    const { isRTL } = useLocale();
    const weekStart = useWeekStart();
    const dayLabels = useDayLabels(weekStart);
    const { daysGrid, weekIndexes } = useDaysGrid(currentDate, weekStart);

    useEffect(() => {
        if (focusedDate === null) {
            return;
        }
        if (!isSameYear(focusedDate, currentDate) || !isSameMonth(focusedDate, currentDate)) {
            setCurrentDate(focusedDate);
        }
    }, [setCurrentDate, focusedDate, currentDate]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (focusedDateRef.current === null) {
                return;
            }

            let nextFocusedDate = focusedDateRef.current;

            const findPrevActiveDay = (date: Date): Date => {
                const nextDate = subDays(date, 1);
                if (shouldDisableDate?.(nextDate, 'day')) {
                    return findPrevActiveDay(nextDate);
                }
                return nextDate;
            };

            const findNextActiveDay = (date: Date): Date => {
                const nextDate = addDays(date, 1);
                if (shouldDisableDate?.(nextDate, 'day')) {
                    return findNextActiveDay(nextDate);
                }
                return nextDate;
            };

            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    nextFocusedDate = isRTL ? findNextActiveDay(nextFocusedDate) : findPrevActiveDay(nextFocusedDate);
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    nextFocusedDate = isRTL ? findPrevActiveDay(nextFocusedDate) : findNextActiveDay(nextFocusedDate);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    nextFocusedDate = subWeeks(nextFocusedDate, 1);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    nextFocusedDate = addWeeks(nextFocusedDate, 1);
                    break;
                case 'Home':
                    event.preventDefault();
                    nextFocusedDate = isRTL
                        ? endOfWeek(nextFocusedDate, { weekStartsOn: weekStart })
                        : startOfWeek(nextFocusedDate, { weekStartsOn: weekStart });
                    break;
                case 'End':
                    event.preventDefault();
                    nextFocusedDate = isRTL
                        ? startOfWeek(nextFocusedDate, { weekStartsOn: weekStart })
                        : endOfWeek(nextFocusedDate, { weekStartsOn: weekStart });
                    break;
                case 'PageUp':
                    event.preventDefault();
                    nextFocusedDate = event.shiftKey ? subYears(nextFocusedDate, 1) : subMonths(nextFocusedDate, 1);
                    break;
                case 'PageDown':
                    event.preventDefault();
                    nextFocusedDate = event.shiftKey ? addYears(nextFocusedDate, 1) : addMonths(nextFocusedDate, 1);
                    break;
            }

            // FIXME: Не идеальное решение, т.к. мы повторно
            // проверяем дату на валидность, нужно придумать решение лучше.
            if (shouldDisableDate?.(nextFocusedDate, 'day')) {
                return;
            }

            focusedDateRef.current = nextFocusedDate;
            setFocusedDate(nextFocusedDate);
        },
        [focusedDateRef, isRTL, shouldDisableDate, setFocusedDate, weekStart],
    );

    const onPrevClick = useCallback(() => {
        setFocusedDate(null);
        setCurrentDate(subMonths(currentDate, 1));
    }, [currentDate, setFocusedDate, setCurrentDate]);

    const onNextClick = useCallback(() => {
        setFocusedDate(null);
        setCurrentDate(addMonths(currentDate, 1));
    }, [currentDate, setFocusedDate, setCurrentDate]);

    return {
        weekIndexes,
        dayLabels,
        headerProps: {
            currentDate,
            onPrevClick,
            onNextClick,
        },
        gridProps: {
            data: daysGrid,
            onKeyDown,
        },
        cellProps: {
            ...cellProps,
            hoveredDate,
            selectedRange: value,
            type: 'day' as const,
        },
        isCellFocused: (cellDate: Date) => {
            return focusedDate ? isSameDay(focusedDate, cellDate) : false;
        },
        isCellDisabled: (cellDate: Date) => {
            return shouldDisableDate ? shouldDisableDate(cellDate, 'day') : false;
        },
        isCellHidden: (cellDate: Date) => {
            return showExtraDays ? false : !isSameMonth(currentDate, cellDate);
        },
        isCellCurrent: (cellData: Date) => {
            return isSameDay(currentDate, cellData);
        },
    };
}

function useDayLabels(weekStart: number): string[] {
    const dayFormatter = useDateFormatter({ weekday: 'short' });

    return useMemo(() => {
        const days = [];

        for (let i = 0; i < 7; i++) {
            const day = setDay(Date.now(), (i + weekStart) % 7);
            days.push(dayFormatter.format(day));
        }

        return days;
    }, [dayFormatter, weekStart]);
}

function useDaysGrid(anchorDate: Date, weekStart: WeekStart) {
    return useMemo(() => {
        const daysGrid: GridData = [];
        const weekIndexes: number[] = [];

        const month = anchorDate.getMonth();
        const year = anchorDate.getFullYear();

        let monthStartsAt = (startOfMonth(anchorDate).getDay() - weekStart) % 7;

        if (monthStartsAt < 0) {
            monthStartsAt += 7;
        }

        const daysInMonth = getDaysInMonth(anchorDate);
        const weeksInMonth = Math.ceil((monthStartsAt + daysInMonth) / 7);

        for (let weekIndex = 0; weekIndex < weeksInMonth; weekIndex++) {
            daysGrid.push([]);

            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
                const day = weekIndex * 7 + dayIndex - monthStartsAt + 1;
                const value = new Date(year, month, day);

                if (dayIndex === 0) {
                    weekIndexes.push(getWeek(value, { weekStartsOn: weekStart, firstWeekContainsDate: 1 }));
                }

                daysGrid[weekIndex].push({ value, title: String(value.getDate()) });
            }
        }

        return { daysGrid, weekIndexes };
    }, [anchorDate, weekStart]);
}
