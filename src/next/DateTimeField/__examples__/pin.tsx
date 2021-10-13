import React, { FC } from 'react';
import { Text } from '@yandex-lego/components/next/Text/desktop/bundle';
import {
    DateTimeField as BaseDateTimeField,
    DateTimeRangeField as BaseDateTimeRangeField,
} from '@yandex-lego/components/next/DateTimeField/desktop/bundle';

const PinTitle = Text.bind(null);
PinTitle.defaultProps = { typography: 'body-short-m', weight: 'medium' };

const DateTimeField = BaseDateTimeField.bind(null);
DateTimeField.defaultProps = { view: 'default', size: 'm' };

const DateTimeRangeField = BaseDateTimeRangeField.bind(null);
DateTimeRangeField.defaultProps = { view: 'default', size: 'm' };

const pins = [
    undefined,
    'brick-brick',
    'brick-clear',
    'brick-round',
    'clear-brick',
    'clear-clear',
    'clear-round',
    'round-brick',
    'round-clear',
] as const;

const Grid: FC = ({ children }) => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px 8px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {children}
    </div>
);

export const Pin = () => {
    return (
        <Grid>
            {pins.map((pin, index) => (
                <React.Fragment key={index}>
                    <PinTitle>{pin ?? 'default'}</PinTitle>
                    <DateTimeField pin={pin} />
                    <DateTimeRangeField pin={pin} />
                </React.Fragment>
            ))}
        </Grid>
    );
};
