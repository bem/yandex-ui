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

// TODO: по хорошему надо протестировать с изначальными значениями тоже
export const ComplexRangeHermioneCase = () => {
    const { size = 'm', type = 'day' } = useParams();
    const state = useCalendarState({ value: [], currentDate: new Date(2020, 2, 10) });

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                <LocaleProvider locale="ru-RU">
                    <Calendar {...state} type={type} view="default" size={size} />
                </LocaleProvider>
            </div>
        </>
    );
};
