import React, { FC } from 'react';

import './GridHead.css';

type GridHeadProps = {
    columns: string[];
};

export const GridHead: FC<GridHeadProps> = (props) => {
    const { columns: days } = props;

    return (
        <div className="Calendar-GridHead">
            {days.map((column) => (
                <span key={column} className="Calendar-Cell">
                    {column}
                </span>
            ))}
        </div>
    );
};
