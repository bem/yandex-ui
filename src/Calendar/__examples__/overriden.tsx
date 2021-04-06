import React from 'react';
import { unstable_Calendar as Calendar, useCalendarState } from '@yandex-lego/components/Calendar/desktop/bundle';

const styles = `
    .Custom-Day {
        display: flex;
        width: 48px;
        height: 48px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .Custom-Day_price {
        font-size: 9px;
        line-height: 16px;
    }

    .Custom-Day_day {
        font-size: 13px;
        line-height: 16px;
    }
`;

export const Overriden = () => {
    const calendarState = useCalendarState({});

    return (
        <>
            <style>{styles}</style>
            <Calendar
                {...calendarState}
                showDayLabels
                showWeekIndexes
                size="m"
                type="day"
                view="default"
                renderCell={(props, Cell) => (
                    <Cell {...props}>
                        <div className="Custom-Day">
                            <span className="Custom-Day_day">{props.children}</span>
                            <span className="Custom-Day_price">~11 500р</span>
                        </div>
                    </Cell>
                )}
            />
        </>
    );
};
