import React, { FC, ReactNode, Ref } from 'react';

import { cnHeader, cnHeaderBase, cnHeaderLogoWrapper, cnHeaderContent, cnHeaderActions } from './Header.const';
import { YandexLogo } from './Logo/Header-Logo';
import './Header.css';

export type HeaderProps = {
    /**
     * Дополнительный класс на DOM элемент.
     */
    className?: string;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLDivElement>;

    /**
     * Полностью свой логотип.
     */
    logo?: ReactNode;

    /**
     * Action элементы в шапке.
     */
    actions?: ReactNode;
};

/**
 * Компонент шапки.
 * @param {HeaderProps} props
 *
 */
export const Header: FC<HeaderProps> = ({ actions, children, className, innerRef, logo }) => {
    return (
        <header ref={innerRef} className={cnHeader(null, [className])}>
            <div className={cnHeaderBase}>
                <div className={cnHeaderLogoWrapper}>{logo || <YandexLogo />}</div>
                <div className={cnHeaderContent}>{children}</div>
                {actions && <div className={cnHeaderActions}>{actions}</div>}
            </div>
        </header>
    );
};

Header.displayName = 'Header';
