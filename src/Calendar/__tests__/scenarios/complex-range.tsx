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

// TODO: по хорошему надо протестировать с изначальными значениями тоже
export const ComplexRangeHermioneCase: FC<any> = (props) => {
    const { size = 'm', type = 'day' } = props;
    const state = useCalendarState({ value: [], currentDate: new Date(2020, 2, 10) });

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                <Calendar {...state} type={type} view="default" size={size} />
            </div>
        </>
    );
};
