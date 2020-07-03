import React, { FC } from 'react';
import { useComponentRegistry } from '@bem-react/di';

import { cnMenu } from '../Menu';
import { IMenuRegistry } from '../Menu.registry';

export interface MenuGroupProps {
    /**
     * Заголовок меню
     */
    title?: string;

    /**
     * Дополнительный класс
     */
    className?: string;
}

export const MenuGroup: FC<MenuGroupProps> = ({ children, className, title, ...props }) => {
    const { Title } = useComponentRegistry<IMenuRegistry>(cnMenu());
    return (
        <div {...props} role="group" className={cnMenu('Group', null, [className])}>
            {title && <Title>{title}</Title>}
            {children}
        </div>
    );
};
