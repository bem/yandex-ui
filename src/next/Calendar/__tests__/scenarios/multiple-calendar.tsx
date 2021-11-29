import React, { useState } from 'react';
import { MultipleCalendar } from '@yandex-lego/components/next/Calendar/desktop/bundle';
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

export const MultipleCalendarHermioneCase = () => {
    const {
        size = 'm',
        disabled,
        showOutsideDays,
        showWeekNumbers,
        showDaysOfWeek,
        showQuarters,
        defaultCalendarView,
        minCalendarView,
    } = useParams();
    const [value, setValue] = useState<Date[]>([]);

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                <LocaleProvider locale="ru-RU">
                    <MultipleCalendar
                        defaultFocusedDate={new Date(2020, 2, 10)}
                        defaultCalendarView={defaultCalendarView}
                        minCalendarView={minCalendarView}
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
