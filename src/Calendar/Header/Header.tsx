import React, { FC } from 'react';

import { ArrowBack } from '../../Icon/__unstable/ArrowBack';
import { ArrowForward } from '../../Icon/__unstable/ArrowForward';
import { ArrowBottom } from '../../Icon/__unstable/ArrowBottom';
import { useDateFormatter } from '../../i18n';
import './Header.css';

export type HeaderProps = {
    onMonthClick?: () => void;
    onNextClick?: () => void;
    onPrevClick?: () => void;
    onYearClick?: () => void;
    nextHidden?: boolean;
    prevHidden?: boolean;
};

type HeaderPropsInternal = HeaderProps & {
    currentDate: Date;
};

export const Header: FC<HeaderPropsInternal> = (props) => {
    const { currentDate, onMonthClick, onYearClick, onPrevClick, onNextClick } = props;
    const captionFormatter = useDateFormatter({ month: 'long' });

    return (
        <div className="Calendar-Header">
            <button className="Calendar-HeaderButton" onClick={onPrevClick}>
                <ArrowBack />
            </button>
            <div className="Calendar-HeaderInner">
                <button className="Calendar-HeaderTitle" onClick={onMonthClick}>
                    {capitalize(captionFormatter.format(currentDate))}
                    {onMonthClick && <ArrowBottom />}
                </button>
                <button className="Calendar-HeaderTitle" onClick={onYearClick}>
                    {currentDate.getFullYear()}
                    {onYearClick && <ArrowBottom />}
                </button>
            </div>
            <button className="Calendar-HeaderButton" onClick={onNextClick}>
                <ArrowForward />
            </button>
        </div>
    );
};

function capitalize(value: string) {
    return value[0].toUpperCase() + value.slice(1);
}
