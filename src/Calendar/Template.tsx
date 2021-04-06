import React, { forwardRef, ReactNode } from 'react';

import { Header, HeaderProps } from './Header';

type TemplateProps = HeaderProps & {
    currentDate: Date;
    className?: string;
    children: ReactNode;
    size?: string;
};

export const Template = forwardRef<HTMLDivElement, TemplateProps>((props, ref) => {
    const {
        children,
        className,
        currentDate,
        onMonthClick,
        onYearClick,
        onNextClick,
        onPrevClick,
        prevHidden,
        nextHidden,
    } = props;

    return (
        <div ref={ref} className={className}>
            <Header
                currentDate={currentDate}
                onMonthClick={onMonthClick}
                onYearClick={onYearClick}
                onNextClick={onNextClick}
                onPrevClick={onPrevClick}
                prevHidden={prevHidden}
                nextHidden={nextHidden}
            />
            <div className="Calendar-Grid">{children}</div>
        </div>
    );
});

if (process.env.NODE_ENV !== 'production') {
    Template.displayName = 'Template';
}
