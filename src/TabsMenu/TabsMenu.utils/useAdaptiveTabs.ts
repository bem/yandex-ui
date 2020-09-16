import { useEffect, useState } from 'react';

import { TabsMenuParams } from '../_adaptive/TabsMenu_adaptive@desktop';
import { ITabsMenuTabProps } from '../Tab/TabsMenu-Tab';

export const useAdaptiveTabs = (
    tabs?: ITabsMenuTabProps[],
    tabsMenuParams?: TabsMenuParams,
    activeTab?: string,
) => {
    const [visibleTabs, setVisibleTabs] = useState<ITabsMenuTabProps[]>(tabs || []);
    const [hiddenTabs, setHiddenTabs] = useState<ITabsMenuTabProps[]>([]);

    useEffect(() => {
        if (!(tabs && tabsMenuParams)) return;

        const {
            tabsMenuWidth,
            tabsWidths,
            moreTabWidth,
        } = tabsMenuParams;

        let index = 0;

        if (tabsMenuWidth >= tabsWidths.reduce((acc, tabWidth) => acc + tabWidth, 0)) {
            index = tabs.length;
        } else {
            let sum = moreTabWidth;

            while (sum + tabsWidths[index] <= tabsMenuWidth) {
                sum += tabsWidths[index];
                index++;
            }
        }

        setVisibleTabs(tabs.slice(0, index));
        setHiddenTabs(tabs.slice(index));
    }, [tabsMenuParams, activeTab]);

    return [visibleTabs, hiddenTabs];
};
