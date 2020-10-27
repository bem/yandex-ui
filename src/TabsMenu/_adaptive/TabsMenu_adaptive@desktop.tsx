import React, { useRef, useState, useEffect, useCallback, createRef, useMemo } from 'react';
import { withBemMod } from '@bem-react/core';

import { Select } from '../../Select/Select.bundle/desktop';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';
import { cnTabsMenu, ITabsMenuProps } from '../TabsMenu';
import { TabsMenuTab } from '../Tab/TabsMenu-Tab';
import { ITabsMenuSizeSProps } from '../_size/TabsMenu_size_s';
import { ITabsMenuSizeMProps } from '../_size/TabsMenu_size_m';
import { calculateItemWidth } from '../TabsMenu.utils/calculateItemWidth';
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

export interface TabsMenuParams {
    /**
     * Ширина блока
     */
    tabsMenuWidth: number;

    /**
     * Массив с ширинами табов
     */
    tabsWidths: number[];

    /**
     * Ширина таба "Ещё"
     */
    moreTabWidth: number;
}

export const withAdaptive =
    withBemMod<TabsMenuAdaptiveProps, ITabsMenuProps & ITabsMenuSizeSProps & ITabsMenuSizeMProps>(
        cnTabsMenu(),
        { adaptive: true },
        (TabsMenu) => (props) => {
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
            const tabsRefs = useMemo(() => tabs.map(() => createRef<HTMLLIElement>()), [tabs]);
            const moreRef = useRef<HTMLLIElement>(null);

            // Параметры блока TabsMenu
            const [tabsMenuParams, setTabsMenuParams] = useState<TabsMenuParams>();
            // Видимость табов
            const [visibleTabs, hiddenTabs] = useAdaptiveTabs(tabs, tabsMenuParams, activeTab);

            const shouldRenderMoreTabs = Boolean(!tabsMenuParams || hiddenTabs.length);

            const onWindowResize = useCallback(() => {
                if (!tabsMenuParams) return;

                setTabsMenuParams({
                    ...tabsMenuParams,
                    tabsMenuWidth: calculateItemWidth(innerRef),
                    moreTabWidth: staticMoreText
                        ? tabsMenuParams.moreTabWidth
                        : calculateItemWidth(moreRef, true) || (tabsMenuParams && tabsMenuParams.moreTabWidth) || 0,
                });
            }, [tabsMenuParams, staticMoreText, innerRef]);

            useIsomorphicLayoutEffect(() => {
                const moreTabWidth =
                    calculateItemWidth(moreRef, true) || (tabsMenuParams && tabsMenuParams.moreTabWidth) || 0;
                setTabsMenuParams({
                    tabsMenuWidth: calculateItemWidth(innerRef),
                    tabsWidths: tabsRefs.map((tab, index) => {
                        const calculated = calculateItemWidth(tab, true);

                        if (calculated !== 0) return calculated;

                        return (tabsMenuParams && tabsMenuParams.tabsWidths[index]) || 0;
                    }),
                    moreTabWidth,
                });
                // Не передаем tabsMenuParams, чтобы не вызывать рекурсию.
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [tabs, activeTab, innerRef, tabsRefs]);

            useEffect(() => {
                window.addEventListener('resize', onWindowResize);

                return () => {
                    window.removeEventListener('resize', onWindowResize);
                };
            }, [onWindowResize]);

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
        },
    );
