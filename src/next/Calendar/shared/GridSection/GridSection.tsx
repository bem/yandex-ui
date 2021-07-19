import React, { forwardRef, HTMLAttributes, RefObject } from 'react';

import { cnCalendar } from '../../Calendar.const';

import './GridSection.css';

export interface GridSectionProps extends HTMLAttributes<HTMLElement> {
    type: 'aside' | 'body';
}

export const GridSection = forwardRef<HTMLElement, GridSectionProps>(function GridSection(props, ref) {
    const { type, className, children, ...otherProps } = props;

    return (
        <div
            ref={ref as RefObject<HTMLDivElement>}
            className={cnCalendar('GridSection', { type }, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
