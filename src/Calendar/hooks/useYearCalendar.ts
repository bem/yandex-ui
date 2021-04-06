import { addYears, isSameYear, setYear, subYears } from 'date-fns';
import { KeyboardEvent, useCallback, useEffect, useMemo } from 'react';

import { useLocale } from '../../i18n';
import { GridData, CalendarHookProps, useBaseCalendar } from './useBaseCalendar';

export function useYearCalendar(props: CalendarHookProps) {
    const { currentDate: currentDateProp, onChange, value, shouldDisableDate } = props;
    const {
        hoveredDate,
        currentDate,
        setCurrentDate,
        focusedDate,
        setFocusedDate,
        focusedDateRef,
        cellProps,
    } = useBaseCalendar({ currentDate: currentDateProp, onChange, value });
    const { isRTL } = useLocale();
    const { yearGrid } = useYearGrid(currentDate);

    useEffect(() => {
        if (focusedDate === null) return;
        if (focusedDate.getFullYear() < currentDate.getFullYear()) {
            setCurrentDate(subYears(currentDate, GRID_TOTAL_SIZE));
        } else if (focusedDate.getFullYear() >= currentDate.getFullYear() + GRID_TOTAL_SIZE) {
            setCurrentDate(addYears(currentDate, GRID_TOTAL_SIZE));
        }
    }, [currentDate, focusedDate, setCurrentDate]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (focusedDateRef.current === null) {
                return;
            }

            let nextFocusedDate = focusedDateRef.current;

            const findPrevActiveYear = (date: Date): Date => {
                const nextDate = subYears(date, 1);
                if (shouldDisableDate?.(nextDate, 'year')) {
                    return findPrevActiveYear(nextDate);
                }
                return nextDate;
            };

            const findNextActiveYear = (date: Date): Date => {
                const nextDate = addYears(date, 1);
                if (shouldDisableDate?.(nextDate, 'year')) {
                    return findNextActiveYear(nextDate);
                }
                return nextDate;
            };

            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    nextFocusedDate = isRTL ? findNextActiveYear(nextFocusedDate) : findPrevActiveYear(nextFocusedDate);
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    nextFocusedDate = isRTL ? findPrevActiveYear(nextFocusedDate) : findNextActiveYear(nextFocusedDate);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    nextFocusedDate = subYears(nextFocusedDate, 4);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    nextFocusedDate = addYears(nextFocusedDate, 4);
                    break;
            }

            // FIXME: Не идеальное решение, т.к. мы повторно
            // проверяем дату на валидность, нужно придумать решение лучше.
            if (shouldDisableDate?.(nextFocusedDate, 'year')) {
                return;
            }

            setFocusedDate(nextFocusedDate);
        },
        [focusedDateRef, isRTL, shouldDisableDate, setFocusedDate],
    );

    const onCellChange = useCallback(
        (event, date: Date) => {
            // Для обычного сценария в год-календаре мы изменяем год, но не трогаем дату и месяц.
            if (value && !Array.isArray(value)) {
                const nextDate = new Date(value);
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
        setCurrentDate(subYears(currentDate, GRID_TOTAL_SIZE));
    }, [currentDate, setFocusedDate, setCurrentDate]);

    const onNextClick = useCallback(() => {
        setFocusedDate(null);
        setCurrentDate(addYears(currentDate, GRID_TOTAL_SIZE));
    }, [currentDate, setFocusedDate, setCurrentDate]);

    return {
        headerProps: {
            currentDate,
            onPrevClick,
            onNextClick,
        },
        gridProps: {
            data: yearGrid,
            onKeyDown,
        },
        cellProps: {
            ...cellProps,
            hoveredDate,
            onChange: onCellChange,
            selectedRange: value,
            type: 'year' as const,
        },
        isCellFocused: (cellDate: Date) => {
            return focusedDate ? isSameYear(focusedDate, cellDate) : false;
        },
        isCellDisabled: (cellDate: Date) => {
            return shouldDisableDate ? shouldDisableDate(cellDate, 'year') : false;
        },
    };
}

const GRID_SIZE = [4, 6];
const GRID_TOTAL_SIZE = GRID_SIZE[0] * GRID_SIZE[1];

function useYearGrid(anchorDate: Date) {
    return useMemo(() => {
        const yearGrid: GridData = [];
        const startYear = anchorDate.getFullYear();

        for (let y = 0, index = 0; y < GRID_SIZE[1]; y++) {
            yearGrid.push([]);

            for (let x = 0; x < GRID_SIZE[0]; x++) {
                const value = setYear(anchorDate, startYear + index++);

                yearGrid[y].push({ value, title: String(value.getFullYear()) });
            }
        }

        return { yearGrid };
    }, [anchorDate]);
}
