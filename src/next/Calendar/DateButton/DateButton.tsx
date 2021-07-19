import React, { FC, HTMLAttributes, RefObject } from 'react';
import { CalendarState } from 'web-platform-alpha';

import { cnCalendar } from '../Calendar.const';

import './DateButton.css';

export interface DateButtonProps extends HTMLAttributes<HTMLElement> {
    innerRef?: RefObject<HTMLElement>;
    state: CalendarState;
    value: Date;
    viewDate: Date;
    today?: boolean;
    weekend?: boolean;
    outside?: boolean;
    focused?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    selected?: boolean;
    rangeSelected?: boolean;
    rangePreview?: boolean;
    rangePreviewStart?: boolean;
    rangePreviewEnd?: boolean;
    selectionStart?: boolean;
    selectionEnd?: boolean;
}

export const DateButton: FC<DateButtonProps> = (props) => {
    const {
        innerRef,
        state,
        className,
        children,
        value,
        viewDate,
        today,
        weekend,
        outside,
        focused,
        disabled,
        hidden,
        selected,
        rangeSelected,
        rangePreview,
        rangePreviewStart,
        rangePreviewEnd,
        selectionStart,
        selectionEnd,
        ...otherProps
    } = props;

    return (
        <span
            ref={innerRef}
            className={cnCalendar(
                'DateButton',
                {
                    today,
                    weekend,
                    outside,
                    focused,
                    disabled,
                    hidden,
                    selected,
                    rangeSelected,
                    rangePreview,
                    rangePreviewStart,
                    rangePreviewEnd,
                    selectionStart,
                    selectionEnd,
                },
                [className],
            )}
            {...otherProps}
        >
            {children}
        </span>
    );
};
