import React, { FC } from 'react';

import './GridAside.css';

type GridAsideProps = {
    rows: Array<string | number>;
};

export const GridAside: FC<GridAsideProps> = (props) => {
    const { rows } = props;

    return (
        <div className="Calendar-GridAside">
            {rows.map((row) => (
                <div key={row} className="Calendar-Cell">
                    {row}
                </div>
            ))}
        </div>
    );
};
