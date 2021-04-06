import React, { forwardRef } from 'react';
import { cn } from '@bem-react/classname';

import { RenderOverride } from '../lib/render-override';
import { CalendarCellProps } from './Cell';
import { DayProps, Day } from './Day';
import { HeaderProps } from './Header';
import { Month, MonthProps } from './Month';
import { Year, YearProps } from './Year';
import './Calendar.css';

export type DateValue = [Date?, Date?] | Date | undefined;

export type CalendarCommonProps = HeaderProps & {
    /**
     * Текущая дата
     */
    currentDate?: Date;
    /**
     * Обработчик события `onChange`
     */
    onChange?: (event: any, date: DateValue) => void;
    /**
     * Функция, отключающая выбранные дни
     */
    shouldDisableDate?: (date: Date, type: CalendarType) => boolean;
    /**
     * Переопределяет компонент `Cell`
     */
    renderCell?: RenderOverride<CalendarCellProps>;
    /**
     * Выбранное значение
     */
    value?: DateValue;
    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;
};

export const cnCalendar = cn('Calendar');

export type CalendarType = 'day' | 'year' | 'month';

export type CalendarProps =
    | { type: 'day' } & DayProps
    | { type: 'year' } & YearProps
    | { type: 'month' } & MonthProps;

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
    const { type, ...restProps } = props;

    if (type === 'day') {
        return <Day {...restProps} ref={ref} />;
    }

    if (type === 'month') {
        return <Month {...restProps} ref={ref} />;
    }

    if (type === 'year') {
        return <Year {...restProps} ref={ref} />;
    }

    throw new Error(`[Calendar] Unexpected type "${type}".`);
});

if (process.env.NODE_ENV !== 'production') {
    Calendar.displayName = 'Calendar';
}
