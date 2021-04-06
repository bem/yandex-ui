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

export const ComplexDayHermioneCase: FC<any> = (props) => {
    const { size = 'm', allDisabled, showExtraDays, showWeekIndexes, showDayLabels } = props;
    const state = useCalendarState({ currentDate: new Date(2020, 2, 10) });
    const shouldDisableDate = allDisabled ? () => true : undefined;

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
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
            </div>
        </>
    );
};
