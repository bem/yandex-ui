import React, { FC, KeyboardEventHandler, ReactElement } from 'react';

import { GridData } from '../hooks/useBaseCalendar';
import './GridBody.css';

type CellProps = { value: Date; title: string | number };
type RenderCell = (cell: CellProps, key: string) => ReactElement;

type GridProps = {
    data: GridData;
    onKeyDown: KeyboardEventHandler<HTMLDivElement>;
    renderCell: RenderCell;
};

export const GridBody: FC<GridProps> = (props) => {
    const { onKeyDown, data, renderCell } = props;

    return (
        <div onKeyDown={onKeyDown} className="Calendar-GridBody" role="grid">
            {data.map((row, index) => (
                <div key={`row-${index}`} className="Calendar-Row" role="row">
                    {row.map((cell, index) => renderCell(cell, `cell-${index}`))}
                </div>
            ))}
        </div>
    );
};
