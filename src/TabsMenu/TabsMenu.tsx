import React, { KeyboardEvent, RefObject, useCallback, useMemo, createRef, FC } from 'react';
import { cn } from '@bem-react/classname';

import { isKeyCode, Keys } from '../lib/keyboard';
import { ITabsMenuTabProps, TabsMenuTab } from './Tab/TabsMenu-Tab';
import './TabsMenu.css';

export interface ITabsMenuProps {
    /**
     * Идентификатор активного пункта меню.
     */
    activeTab?: string;

    /**
     * Массив пунктов меню.
     */
    tabs: ITabsMenuTabProps[];

    /**
     * Ссылка на корневой DOM элемент компонента.
     */
    innerRef?: RefObject<HTMLUListElement>;

    /**
     * Расположение пунктов меню (используется для доступности).
     *
     * @internal
     * @default 'vertical'
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const cnTabsMenu = cn('TabsMenu');

/**
 * Компонент для создания горизонтального меню.
 * @param {ITabsMenuProps} props
 */
export const TabsMenu: FC<ITabsMenuProps> = ({
    activeTab,
    className,
    innerRef,
    tabs,
    orientation = 'vertical',
    // @ts-ignore
    theme: _theme,
    // @ts-ignore
    layout: _layout,
    ...props
}) => {
    const tabsRef = useMemo(() => tabs.map(() => createRef<HTMLLIElement>()), [tabs]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (isKeyCode(event.keyCode, [Keys.LEFT, Keys.DOWN, Keys.RIGHT, Keys.UP])) {
                event.preventDefault();

                let nextTabMenuIndex = 0;
                const direction = isKeyCode(event.keyCode, [Keys.LEFT, Keys.UP]) ? -1 : 1;

                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].id === activeTab) {
                        nextTabMenuIndex = i;
                        break;
                    }
                }

                for (let i = nextTabMenuIndex; i < tabs.length; i += direction) {
                    nextTabMenuIndex += direction;
                    // При необходимости тут можно реализовать цикличный выбор табов,
                    // при попадании индекса за границу списка,
                    // выставлять nextTabMenuIndex в противоположное значение.
                    const isEdge = nextTabMenuIndex >= tabs.length || nextTabMenuIndex < 0;
                    const isTabNonDisabled = tabs[nextTabMenuIndex] && !tabs[nextTabMenuIndex].disabled;
                    if (isEdge || isTabNonDisabled) {
                        break;
                    }
                }

                const nextTabMenu = tabs[nextTabMenuIndex];
                const nextTabMenuRef = tabsRef[nextTabMenuIndex];

                if (
                    nextTabMenu !== undefined &&
                    nextTabMenuRef !== undefined &&
                    nextTabMenuRef.current !== null &&
                    nextTabMenu.onClick !== undefined
                ) {
                    nextTabMenuRef.current.focus();
                    // Не совем удачное решение, переключать табики через onClick,
                    // тут могут возникнуть проблемы с event, т.к. в этом кейсе это KeyboardEvent.
                    nextTabMenu.onClick(event as any);
                }
            }
        },
        [activeTab, tabsRef, tabs],
    );

    return (
        <ul
            {...props}
            aria-orientation={orientation}
            className={cnTabsMenu(null, [className])}
            ref={innerRef}
            role="tablist"
        >
            {tabs.map(({ id, disabled, ...tabProps }, index) => (
                <TabsMenuTab
                    {...tabProps}
                    innerRef={tabsRef[index]}
                    first={index === 0}
                    disabled={disabled}
                    onClick={disabled ? undefined : tabProps.onClick}
                    active={id === activeTab}
                    key={id}
                    onKeyDown={onKeyDown}
                />
            ))}
        </ul>
    );
};

TabsMenu.displayName = cnTabsMenu();
