import React, { FC, ReactNode, useRef } from 'react';

import { UseCalendarCellProps, useCalendarCell } from '../hooks/useCalendarCell';
import { cnCalendar } from '../Calendar';
import './Cell.css';

export type CalendarCellProps = UseCalendarCellProps & {
    /**
     * Содержимое ячейки
     */
    children: ReactNode;
    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;
};

export const Cell: FC<CalendarCellProps> = (props) => {
    const { className, children } = props;
    const ref = useRef<HTMLButtonElement>(null);
    const { unstable_state: state, cellProps } = useCalendarCell(props, ref);

    return (
        <button
            {...cellProps}
            ref={ref}
            type="button"
            className={cnCalendar(
                'Cell',
                {
                    rangePreview: state.isRangePreview,
                    rangePreviewEnd: state.isRangePreviewEnd,
                    rangePreviewStart: state.isRangePreviewStart,
                    rangeSelected: state.isRangeSelected,
                    selected: state.isSelected,
                    selectionEnd: state.isSelectionEnd,
                    selectionStart: state.isSelectionStart,
                    current: state.isCurrent,
                },
                [className],
            )}
        >
            {state.isCurrent ? <span className="Calendar-Current">{children}</span> : children}
        </button>
    );
};
