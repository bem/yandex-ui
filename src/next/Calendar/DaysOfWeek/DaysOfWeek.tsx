import React, { CSSProperties, FC } from 'react';
import { isWeekend } from 'web-platform-alpha/libs/date';
import { useDateFormatter } from 'web-platform-alpha';

import { cnCalendar } from '../Calendar.const';
import { Grid, GridCell, GridRow, GridSection } from '../shared';

// TODO: May be move to web-platform?
const visuallyHiddenStyle: CSSProperties = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    margin: '0 -1px -1px 0',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: 1,
    whiteSpace: 'nowrap',
};

export interface DaysOfWeekProps {
    daysOfWeek: Date[];
    showWeekNumbers?: boolean;
}

export const DaysOfWeek: FC<DaysOfWeekProps> = (props) => {
    const { showWeekNumbers, daysOfWeek } = props;

    const shortFormatter = useDateFormatter({ weekday: 'short' });
    const longFormatter = useDateFormatter({ weekday: 'long' });

    return (
        <Grid className={cnCalendar('DaysOfWeek')}>
            {showWeekNumbers && (
                <GridSection type="aside">
                    <GridRow>
                        <GridCell />
                    </GridRow>
                </GridSection>
            )}

            <GridSection type="body">
                <GridRow>
                    {daysOfWeek.map((dayOfWeek, index) => (
                        <GridCell key={index}>
                            <span style={visuallyHiddenStyle}>{longFormatter.format(dayOfWeek)}</span>
                            <span className={cnCalendar('DayOfWeek', { weekend: isWeekend(dayOfWeek) })} aria-hidden>
                                {shortFormatter.format(dayOfWeek)}
                            </span>
                        </GridCell>
                    ))}
                </GridRow>
            </GridSection>
        </Grid>
    );
};
