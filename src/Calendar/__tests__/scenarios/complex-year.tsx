import React, { FC } from 'react';
import { unstable_Calendar as Calendar, useCalendarState } from '@yandex-lego/components/Calendar/desktop/bundle';

const styles = `
    [data-testid=container] {
        display: inline-block;
    }

    .Calendar {
        outline: 1px solid #000;
    }
`;

export const ComplexYearHermioneCase: FC<any> = (props) => {
    const { size = 'm' } = props;
    const state = useCalendarState({ currentDate: new Date(2020, 2, 10) });

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                <Calendar {...state} type="year" view="default" size={size} />
            </div>
        </>
    );
};
