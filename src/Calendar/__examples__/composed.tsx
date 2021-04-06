import React, { useState } from 'react';
import {
    CalendarType,
    unstable_Calendar as Calendar,
    useCalendarState,
} from '@yandex-lego/components/Calendar/desktop/bundle';

const styles = `
    .DatePicker {
        display: inline-flex;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 1.5ex 2ex -1ex rgba(0, 0, 0, .3);
        padding: 16px;
    }
`;

export const Composed = () => {
    const [type, setType] = useState<CalendarType>('year');
    const [size, sizeSize] = useState<'m' | 's' | 'l'>('s');
    const calendarState = useCalendarState({
        value: [new Date(2022, 0, 28)],
    });

    return (
        <>
            <style>{styles}</style>
            <div>
                <button onClick={() => setType('day')}>day</button>
                <button onClick={() => setType('month')}>month</button>
                <button onClick={() => setType('year')}>year</button>
            </div>
            <div>
                <button onClick={() => sizeSize('s')}>size s</button>
                <button onClick={() => sizeSize('m')}>size m</button>
                <button onClick={() => sizeSize('l')}>size l</button>
            </div>
            <div className="DatePicker">
                <Calendar {...calendarState} type={type} view="default" size={size} />
            </div>
        </>
    );
};
