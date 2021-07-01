import React, { useRef } from 'react';
import { withBemMod } from '@bem-react/core';

import { Select } from '../../Select/desktop/bundle';
import { cnTabsMenu, ITabsMenuProps } from '../TabsMenu';
import { TabsMenuTab } from '../Tab/TabsMenu-Tab';
import { ITabsMenuSizeSProps } from '../_size/TabsMenu_size_s';
import { ITabsMenuSizeMProps } from '../_size/TabsMenu_size_m';
import { useAdaptiveTabs } from '../TabsMenu.utils/useAdaptiveTabs';
import './TabsMenu_adaptive@desktop.css';

export interface TabsMenuAdaptiveProps {
    /**
     * Включает адаптивность
     */
    adaptive?: boolean;

    /**
     * Текст дополнительного таба, скрывающего другие
     * по умолчанию "Ещё"
     */
    moreText?: string;

    /**
     * Текст таба "Ещё" не будет меняться при выборе внутреннего таба
     */
    staticMoreText?: boolean;

    /**
     * Прятать ли иконку
     */
    hideMoreIcon?: boolean;
}

export const withAdaptive = withBemMod<
    TabsMenuAdaptiveProps,
    ITabsMenuProps & ITabsMenuSizeSProps & ITabsMenuSizeMProps
>(cnTabsMenu(), { adaptive: true }, (TabsMenu) => (props) => {
    const {
        tabs,
        size,
        moreText = 'Ещё',
        staticMoreText,
        hideMoreIcon,
        activeTab,
        onChange,
        // @ts-ignore
        theme = 'normal',
    } = props;
    const innerRef = props.innerRef !== undefined ? props.innerRef : useRef<HTMLUListElement>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tabsRefs = React.useMemo(() => tabs.map(() => React.createRef<HTMLLIElement>()), [tabs]);
    const moreRef = useRef<HTMLLIElement>(null);

    // Видимость табов
    const [visibleTabs, hiddenTabs] = useAdaptiveTabs({
        tabs,
        wrapperRef: innerRef,
        tabsRefs,
        moreRef,
    });

    const shouldRenderMoreTabs = Boolean(hiddenTabs.length);

    return (
        <TabsMenu
            {...props}
            innerRef={innerRef}
            tabs={visibleTabs}
            tabsRefs={tabsRefs}
            activeTab={activeTab}
            onChange={onChange}
            addonAfter={
                shouldRenderMoreTabs && (
                    <TabsMenuTab
                        className={cnTabsMenu('Tab', { more: true, hiddenIcon: hideMoreIcon })}
                        innerRef={moreRef}
                        active={hiddenTabs.some((tab) => tab.id === activeTab)}
                        content={
                            <Select
                                placeholder={moreText}
                                size={size}
                                theme={theme}
                                value={hiddenTabs.some((tab) => tab.id === activeTab) ? activeTab : undefined}
                                onChange={(event) => {
                                    if (onChange !== undefined) {
                                        onChange(event.target.value);
                                    }
                                }}
                                options={hiddenTabs.map((tab) => ({
                                    value: tab.id || '',
                                    content: tab.content,
                                }))}
                                showAlwaysPlaceholder={staticMoreText}
                                iconProps={hideMoreIcon ? { type: undefined, glyph: undefined } : undefined}
                                baseline
                            />
                        }
                    />
                )
            }
        />
    );
});
