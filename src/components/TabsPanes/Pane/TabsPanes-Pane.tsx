import React, { ReactNode, FC } from 'react';

import { cnTabsPanes } from '../TabsPanes';

export interface ITabsPanesPaneProps {
    /**
     * Содержимое вкладки
     */
    content?: ReactNode;

    /**
     * Неактивное состояние вкладки
     */
    disabled?: boolean;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Уникальный id компонента
     */
    id?: string;
}

export const TabsPanesPane: FC<ITabsPanesPaneProps> = ({ content, className, ...props }) => (
    <div {...props} role="tabpanel" className={cnTabsPanes('Pane', [className])}>
        {content}
    </div>
);
