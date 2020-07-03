import React, { RefObject, FC } from 'react';
import { cn } from '@bem-react/classname';

import { Nullable } from '../../typings/utility-types';
import { ITabsPanesPaneProps, TabsPanesPane } from './Pane/TabsPanes-Pane';

export interface ITabsPanesProps {
    /**
     * Идентификатор отображаемой вкладки.
     */
    activePane?: string;

    /**
     * Набор вкладок.
     */
    panes: ITabsPanesPaneProps[];

    /**
     * Ссылка на корневой DOM-элемент компонента.
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const cnTabsPanes = cn('TabsPanes');

/**
 * Компонент для создания вкладок с разным содержимым.
 * Переключение между вкладками можно реализовать, например, с помощью `TabsMenu`, `Radiobox`, `Select`.
 *
 * @param {ITabsPanesProps} props
 */
export const TabsPanes: FC<ITabsPanesProps> = ({ activePane, className, innerRef, panes, ...props }) => {
    const currentPane = panes.reduce<Nullable<ITabsPanesPaneProps>>((acc, pane) => {
        if (acc !== null) {
            return acc;
        }
        return pane.id === activePane ? pane : null;
    }, null);

    if (currentPane === null) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn(`Панель с id "${activePane}" не найдена в списке элементов.`);
        }
    }

    const { id, ...paneProps }: any = currentPane || {};

    return (
        <div {...props} ref={innerRef} role="tabpanel" className={cnTabsPanes(null, [className])}>
            {currentPane && <TabsPanesPane {...paneProps} />}
        </div>
    );
};

TabsPanes.displayName = cnTabsPanes();
