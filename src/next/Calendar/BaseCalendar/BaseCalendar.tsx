import React, { FC } from 'react';
import { CalendarState } from 'web-platform-alpha';

import { cnCalendar } from '../Calendar.const';
import { CalendarBaseProps } from '../types';
import { View } from '../View';

import './BaseCalendar.css';

export interface BaseCalendarProps extends CalendarBaseProps {
    className?: string;
    state: CalendarState;
}

export const BaseCalendar: FC<BaseCalendarProps> = (props) => {
    const { state, className, ...otherProps } = props;
    const { views } = state;

    return (
        <div className={cnCalendar(null, [className])}>
            {views.map((viewProps, index) => (
                <View key={index} {...viewProps} {...otherProps} index={index} state={state} />
            ))}
        </div>
    );
};
