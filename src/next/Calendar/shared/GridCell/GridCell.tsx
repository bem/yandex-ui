import React, { HTMLAttributes, forwardRef } from 'react';

import { cnCalendar } from '../../Calendar.const';

import './GridCell.css';

export type GridCellProps = HTMLAttributes<HTMLElement>;

export const GridCell = forwardRef<HTMLElement, GridCellProps>(function GridCell(props, ref) {
    const { className, children, ...otherProps } = props;

    return (
        <span ref={ref} className={cnCalendar('GridCell', null, [className])} {...otherProps}>
            {children}
        </span>
    );
});
