import { useCallback, useEffect, useState } from 'react';

import { ITabsMenuTabProps } from '../Tab/TabsMenu-Tab';
import { calculateItemWidth } from './calculateItemWidth';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';

interface IUseAdaptiveTabsProps {
    tabs: ITabsMenuTabProps[];
    tabsRefs: Array<React.RefObject<HTMLLIElement>>;
    wrapperRef: React.RefObject<HTMLUListElement>;
    moreRef: React.RefObject<HTMLLIElement>;
}

export const useAdaptiveTabs = ({ tabs, tabsRefs, wrapperRef, moreRef }: IUseAdaptiveTabsProps) => {
    const [visibleTabs, setVisibleTabs] = useState<ITabsMenuTabProps[]>(tabs || []);
    const [hiddenTabs, setHiddenTabs] = useState<ITabsMenuTabProps[]>([]);
    const [tabWidths, setTabWidths] = useState<Array<number>>([]);
    const [wrapperWidth, setWrapperWidth] = useState<number>(0);
    const [tabMoreWidth, setTabMoreWidth] = useState<number>(0);

    useIsomorphicLayoutEffect(() => {
        setVisibleTabs(tabs);
        setHiddenTabs([]);
    }, [tabs]);

    useIsomorphicLayoutEffect(() => {
        if (wrapperWidth >= tabs.reduce((acc, _tab, index) => acc + tabWidths[index], 0)) {
            setVisibleTabs(tabs);
            setHiddenTabs([]);
            return;
        }

        let index = 0;
        let sum = tabMoreWidth;

        while (sum + tabWidths[index] <= wrapperWidth) {
            sum += tabWidths[index];
            index++;
        }

        setVisibleTabs(tabs.slice(0, index));
        setHiddenTabs(tabs.slice(index));
    }, [wrapperWidth, tabMoreWidth, tabWidths, tabs]);

    useIsomorphicLayoutEffect(() => {
        setTabMoreWidth(calculateItemWidth(moreRef, true) || tabMoreWidth || 0);
        const newWidths = tabsRefs.map((tab, index) => {
            return calculateItemWidth(tab, true) || tabWidths[index] || 0;
        });

        if (
            newWidths.reduce((acc, tabWidth) => acc + tabWidth, 0) !==
            tabWidths.reduce((acc, tabWidth) => acc + tabWidth, 0)
        ) {
            setTabWidths(newWidths);
        }
    });

    const onWindowResize = useCallback(() => {
        setWrapperWidth(calculateItemWidth(wrapperRef));
    }, [wrapperRef]);

    useIsomorphicLayoutEffect(() => {
        onWindowResize();
    }, [onWindowResize]);

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [onWindowResize]);

    return [visibleTabs, hiddenTabs];
};
