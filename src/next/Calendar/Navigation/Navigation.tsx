import React, { FC, ReactNode, useCallback } from 'react';
import { useDateFormatter, CalendarNavigationAction, CalendarState } from 'web-platform-alpha';

import { ArrowBack } from '../../../Icon/__unstable/ArrowBack';
import { ArrowForward } from '../../../Icon/__unstable/ArrowForward';
import { cnCalendar } from '../Calendar.const';
import { RangeValue } from '../types';

import './Navigation.css';

export interface NavigationProps {
    viewRange: RangeValue<Date>;
    state: CalendarState;
    prevHidden?: boolean;
    nextHidden?: boolean;
}

export const Navigation: FC<NavigationProps> = (props) => {
    const { state, viewRange, prevHidden, nextHidden } = props;
    const { activeView, baseDate, moveView, setView, moveDate, canNavigateTo, navigateTo } = state;
    const monthFormatter = useDateFormatter({ month: 'long' });
    const monthTitle = capitalize(monthFormatter.format(viewRange.start));
    const startViewYear = viewRange.start.getFullYear();
    const endViewYear = viewRange.end.getFullYear();

    const candidatePrev = moveDate(baseDate, CalendarNavigationAction.PrevView);
    const candidateNext = moveDate(baseDate, CalendarNavigationAction.NextView);
    const prevDisabled = !canNavigateTo(candidatePrev);
    const nextDisabled = !canNavigateTo(candidateNext);

    const handleNavigateToPrevView = useCallback(() => {
        if (!prevDisabled) {
            navigateTo(candidatePrev);
        }
    }, [candidatePrev, navigateTo, prevDisabled]);

    const handleNavigateToNextView = useCallback(() => {
        if (!nextDisabled) {
            navigateTo(candidateNext);
        }
    }, [candidateNext, navigateTo, nextDisabled]);

    const nextView = moveView(activeView, 1);
    const nextViewDisabled = nextView === activeView;

    const handleChangeView = useCallback(() => {
        setView(nextView);
    }, [nextView, setView]);

    let title: ReactNode;
    if (activeView === 'day') {
        title = `${monthTitle} ${startViewYear}`;
    } else if (activeView === 'month') {
        title = startViewYear;
    } else {
        title = `${startViewYear} – ${endViewYear}`;
    }

    // NOTE: Нужно для того, чтобы корректно работала клавиатурная навигация в шапке,
    // когда календарей несколько
    const tabIndex = state.views.length > 1 ? 1 : 0;

    return (
        <div className={cnCalendar('Navigation')}>
            <button
                className={cnCalendar('NavigationAction', { disabled: prevDisabled, hidden: prevHidden })}
                tabIndex={tabIndex}
                onClick={handleNavigateToPrevView}
                disabled={prevDisabled}
            >
                <ArrowBack />
            </button>

            <div className={cnCalendar('NavigationTitle')}>
                <button
                    className={cnCalendar('NavigationTitleButton', { disabled: nextViewDisabled })}
                    tabIndex={tabIndex}
                    onClick={handleChangeView}
                    disabled={nextViewDisabled}
                >
                    {title}
                </button>
            </div>

            <button
                className={cnCalendar('NavigationAction', { disabled: nextDisabled, hidden: nextHidden })}
                tabIndex={tabIndex}
                onClick={handleNavigateToNextView}
                disabled={nextDisabled}
            >
                <ArrowForward />
            </button>
        </div>
    );
};

function capitalize(value: string) {
    return value[0].toUpperCase() + value.slice(1);
}
