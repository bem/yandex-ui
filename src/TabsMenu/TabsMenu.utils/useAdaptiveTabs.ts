import { useCallback, useEffect, useMemo, useRef, useReducer } from 'react';

import { ITabsMenuTabProps } from '../Tab/TabsMenu-Tab';
import { calculateItemWidth } from './calculateItemWidth';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';

interface IUseAdaptiveTabsProps {
    tabs: ITabsMenuTabProps[];
    tabsRefs: Array<React.RefObject<HTMLLIElement>>;
    wrapperRef: React.RefObject<HTMLUListElement>;
    moreRef: React.RefObject<HTMLLIElement>;
    activeTab?: string;
}

export const useAdaptiveTabs = (props: IUseAdaptiveTabsProps) => {
    const { tabs, tabsRefs, wrapperRef, moreRef } = props;
    const [, forceRender] = useReducer((s) => s + 1, 0);
    const visibleCountRef = useRef(-1);
    const previousTabs = useRef<ITabsMenuTabProps[]>(tabs);
    const tabsWidth = useRef<number[]>([]);

    // Обнулять состояни нужно именно здесь, чтобы отрендерить все табы и получить их ширины
    // в useIsomorphicLayoutEffect
    if (tabs !== previousTabs.current) {
        visibleCountRef.current = -1;
        previousTabs.current = tabs;
    }

    useIsomorphicLayoutEffect(() => {
        // При первом рендере и при изменении количества табов производим подсчёт ширин
        tabsWidth.current = tabsRefs.map((tab) => calculateItemWidth(tab, true));
    }, [tabsRefs]);

    const updateVisibleCount = useCallback(() => {
        const wrapperWidth = calculateItemWidth(wrapperRef);
        const totalWidth = tabsWidth.current.reduce((acc, tab) => acc + tab, 0);
        let nextVisibleCount = tabsWidth.current.length;

        if (totalWidth > wrapperWidth) {
            nextVisibleCount = 0;
            let sum = calculateItemWidth(moreRef, true);

            while (sum + tabsWidth.current[nextVisibleCount] <= wrapperWidth) {
                sum += tabsWidth.current[nextVisibleCount];
                nextVisibleCount++;
            }
        }

        if (visibleCountRef.current !== nextVisibleCount) {
            visibleCountRef.current = nextVisibleCount;
            forceRender();
        }
        // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useIsomorphicLayoutEffect(() => {
        // На каждый рендер проверяем не поменялось ли количество видимых табов
        updateVisibleCount();
    });

    useEffect(() => {
        window.addEventListener('resize', updateVisibleCount);

        return () => {
            window.removeEventListener('resize', updateVisibleCount);
        };
    }, [updateVisibleCount]);

    const visibleCount = visibleCountRef.current;

    return useMemo(() => {
        if (visibleCount === -1) {
            return [tabs, tabs];
        }

        return [tabs.slice(0, visibleCount), tabs.slice(visibleCount)];
    }, [tabs, visibleCount]);
};
