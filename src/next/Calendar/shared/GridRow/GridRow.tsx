import React, { forwardRef, HTMLAttributes, Ref } from 'react';

import { cnCalendar } from '../../Calendar.const';

import './GridRow.css';

export type GridRowProps = HTMLAttributes<HTMLElement>;

export const GridRow = forwardRef<HTMLElement, GridRowProps>(function GridRow(props, ref) {
    const { className, children, ...otherProps } = props;

    return (
        <div ref={ref as Ref<HTMLDivElement>} className={cnCalendar('GridRow', null, [className])} {...otherProps}>
            {children}
        </div>
    );
});
