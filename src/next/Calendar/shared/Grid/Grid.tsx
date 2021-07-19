import React, { forwardRef, HTMLAttributes, RefObject } from 'react';

import { cnCalendar } from '../../Calendar.const';

import './Grid.css';

export type GridProps = HTMLAttributes<HTMLElement>;

export const Grid = forwardRef<HTMLElement, GridProps>(function Grid(props, ref) {
    const { className, children, ...otherProps } = props;

    return (
        <div ref={ref as RefObject<HTMLDivElement>} className={cnCalendar('Grid', null, [className])} {...otherProps}>
            {children}
        </div>
    );
});
