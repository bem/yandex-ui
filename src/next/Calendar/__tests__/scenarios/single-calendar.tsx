import React, { useState } from 'react';
import { Calendar } from '@yandex-lego/components/next/Calendar/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';
import { LocaleProvider } from 'web-platform-alpha/libs/i18n';

const styles = `
    [data-testid=container] {
        display: inline-block;
    }

    .Calendar {
        outline: 1px solid #000;
    }
`;

export const SingleCalendarHermioneCase = () => {
    const {
        size = 'm',
        disabled,
        showOutsideDays,
        showWeekNumbers,
        showDaysOfWeek,
        showQuarters,
        defaultCalendarView,
    } = useParams();
    const [value, setValue] = useState<Date>();

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                <LocaleProvider locale="ru-RU">
                    <Calendar
                        defaultFocusedDate={new Date(2020, 2, 10)}
                        defaultCalendarView={defaultCalendarView}
                        value={value}
                        onChange={(event) => setValue(event.value)}
                        disabled={disabled}
                        showOutsideDays={showOutsideDays}
                        showWeekNumbers={showWeekNumbers}
                        showDaysOfWeek={showDaysOfWeek}
                        showQuarters={showQuarters}
                        view="default"
                        size={size}
                    />
                </LocaleProvider>
            </div>
        </>
    );
};
