import { FocusEvent, MouseEvent, RefObject, useEffect } from 'react';
import {
    endOfDay,
    endOfMonth,
    endOfYear,
    isSameDay,
    isSameMonth,
    isSameYear,
    isWithinInterval,
    startOfDay,
    startOfMonth,
    startOfYear,
} from 'date-fns';

import { unstable_usePress } from '../hooks/usePress';
import { CalendarType, DateValue } from '../Calendar';

export type UseCalendarCellProps = {
    /**
     * Дата, которая находится в состоянии ховера
     */
    hoveredDate: Date | null;
    /**
     * Отключает работу ячейки
     */
    disabled?: boolean;
    /**
     * Устанавливает фокус в ячейку
     */
    focused?: boolean;
    /**
     * Скрывает ячейку
     */
    hidden?: boolean;
    /**
     * Обработчик события `onChange`
     */
    onChange: (event: any, date: Date) => void;
    /**
     * Обработчик события `onFocus`
     */
    onFocus: (event: FocusEvent, value: Date) => void;
    /**
     * Обработчик события `onMouseEnter`
     */
    onMouseEnter: ((event: MouseEvent, value: Date) => void) | null;
    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave: ((event: MouseEvent, value: Date) => void) | null;
    /**
     * Диапазон выбранных дат
     */
    selectedRange?: DateValue;
    /**
     * Значение ячейки
     */
    value: Date;
    /**
     * Тип календаря в котором находится ячейка
     */
    type: CalendarType;
    /**
     * Текущая дата
     */
    current?: boolean
};

export function useCalendarCell(props: UseCalendarCellProps, ref: RefObject<HTMLElement>) {
    const {
        current,
        hoveredDate,
        disabled,
        focused,
        hidden,
        onChange,
        onFocus,
        onMouseEnter,
        onMouseLeave,
        selectedRange,
        type,
        value,
    } = props;
    const compareDate = getDateComparator(type);

    let isSelected = false;
    let isRangeSelected = false;
    let isSelectionStart = false;
    let isSelectionEnd = false;
    let isRangePreview = false;
    let isRangePreviewStart = false;
    let isRangePreviewEnd = false;

    if (Array.isArray(selectedRange)) {
        isSelectionStart = compareDate(selectedRange[0], value);
        isSelectionEnd = compareDate(selectedRange[1], value);
        isSelected = isSelectionStart || isSelectionEnd;

        const createRange = getRangeCreator(type);
        const isSameDate = compareDate(selectedRange[0], hoveredDate);

        // Сценарий для показа превью выбора даты.
        if (!isSameDate && hoveredDate && (selectedRange[0] && !selectedRange[1])) {
            const isMore = compareDate(value, hoveredDate);
            isRangePreview = isWithinInterval(value, createRange(hoveredDate, selectedRange[0]));

            if (hoveredDate > selectedRange[0]) {
                isRangePreviewEnd = isMore;
            } else {
                isRangePreviewStart = isMore;
                // Меняем значения местами, для правильного показа превью.
                if (isSelectionStart) {
                    isSelectionStart = false;
                    isSelectionEnd = true;
                }
            }
        } else if (isFilledRange(selectedRange)) {
            isRangeSelected = isWithinInterval(value, createRange(selectedRange[0], selectedRange[1]));
        }
    } else {
        isSelected = compareDate(selectedRange, value);
    }

    const { pressProps } = unstable_usePress({
        disabled,
        onClick: (event) => onChange(event, value),
    });

    useEffect(() => {
        if (focused && ref.current) {
            ref.current.focus();
        }
    }, [ref, focused]);

    return {
        // FIXME: Не самое удачное решение, возможно это должно быть на уровне стейт-менеджера компонента.
        unstable_state: {
            isCurrent: current,
            isRangePreview,
            isRangePreviewEnd,
            isRangePreviewStart,
            isRangeSelected,
            isSelected,
            isSelectionEnd,
            isSelectionStart,
        },
        cellProps: {
            ...pressProps,
            'aria-disabled': disabled,
            'aria-hidden': hidden,
            'aria-selected': isSelected,
            onFocus: (event: FocusEvent) => onFocus(event, value),
            onMouseEnter: (event: MouseEvent) => onMouseEnter?.(event, value),
            onMouseLeave: (event: MouseEvent) => onMouseLeave?.(event, value),
            role: 'gridcell',
            tabIndex: (!isSelected || disabled) ? -1 : 0,
        },
    };
}

type DateComparator = (dateLeft: Date | undefined | null, dateRight: Date | undefined | null) => boolean;

function getDateComparator(type: CalendarType): DateComparator {
    if (type === 'day') return isSameDay as DateComparator;
    if (type === 'month') return isSameMonth as DateComparator;
    if (type === 'year') return isSameYear as DateComparator;

    throw new Error(`[getDateComparator] Unexpected type "${type}".`);
}

function getSpacer(type: CalendarType) {
    if (type === 'day') return [startOfDay, endOfDay];
    if (type === 'month') return [startOfMonth, endOfMonth];
    if (type === 'year') return [startOfYear, endOfYear];

    throw new Error(`[getSpacer] Unexpected type "${type}".`);
}

function getRangeCreator(type: CalendarType) {
    const [toStart, toEnd] = getSpacer(type);

    return function createRange(start: Date, end: Date) {
        if (end < start) {
            [start, end] = [end, start];
        }

        // Устанавливаем в диапазоне начальное и конечное значение,
        // для того, чтобы сравнение происходило корректно.
        return { start: toStart(start), end: toEnd(end) };
    };
}

function isFilledRange(range: unknown[]): range is [Date, Date] {
    return range[0] !== undefined && range[1] !== undefined;
}
