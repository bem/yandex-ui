import React from 'react';
import { unstable_Calendar as Calendar, useCalendarState } from '@yandex-lego/components/Calendar/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';
import { LocaleProvider } from '@yandex-lego/components/i18n';

const styles = `
    [data-testid=container] {
        display: inline-block;
    }

    .Calendar {
        outline: 1px solid #000;
    }
`;

export const ComplexDayHermioneCase = () => {
    const { size = 'm', allDisabled, showExtraDays, showWeekIndexes, showDayLabels } = useParams();
    const state = useCalendarState({ currentDate: new Date(2020, 2, 10) });
    const shouldDisableDate = allDisabled ? () => true : undefined;

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                <LocaleProvider locale="ru-RU">
                    <Calendar
                        {...state}
                        showExtraDays={showExtraDays}
                        shouldDisableDate={shouldDisableDate}
                        showWeekIndexes={showWeekIndexes}
                        showDayLabels={showDayLabels}
                        type="day"
                        view="default"
                        size={size}
                    />
                </LocaleProvider>
            </div>
        </>
    );
};
