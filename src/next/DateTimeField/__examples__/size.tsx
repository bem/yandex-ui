import React, { FC } from 'react';
import { DateTimeField, DateTimeRangeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

const Grid: FC = ({ children }) => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, min-content)',
            gap: '16px 8px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {children}
    </div>
);

export const Size = () => {
    return (
        <Grid>
            <DateTimeField view="default" size="s" />
            <DateTimeField view="default" size="m" />

            <DateTimeRangeField view="default" size="s" />
            <DateTimeRangeField view="default" size="m" />
        </Grid>
    );
};
