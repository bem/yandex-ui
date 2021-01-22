import React, { FC, ReactNode, Ref } from 'react';

import { cnHeader } from '../Header.const';
import { Link, ILinkProps } from '../../Link/Link';
import './Header-Nav.css';

export type HeaderNavLinkProps = ILinkProps & {
    /**
     * Ссылка, куда ведет таб.
     */
    href?: string;

    /**
     * Флаг для обозначения активного таба.
     */
    active?: boolean;

    /**
     * Дополнительный className для таба.
     */
    className?: string;

    /**
     * Иконка, которая встанет перед текстом.
     */
    icon?: ReactNode;
}

export type NavType = {
    /**
     * Дополнительный className для навигационных табов.
     */
    className?: string;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLDivElement>;
};

/**
 * Компонент группировки навигационных табов.
 * @param {NavType} props
 *
 */
export const HeaderNav:FC<NavType> = ({ className, children, innerRef }) => {
    return (
        <nav ref={innerRef} className={cnHeader('Nav', [cnHeader('Item'), className])}>
            {children}
        </nav>
    );
};

/**
 * Компонент навигационного таба.
 * @param {HeaderNavLinkProps} props
 *
 */
export const HeaderNavItem: FC<HeaderNavLinkProps> = ({ href, active, className, icon, children, ...rest }) => (
    <Link
        {...rest}
        className={cnHeader('NavLink', { active }, [className])}
        href={href}
    >
        {icon}
        <span>{children}</span>
    </Link>
);
