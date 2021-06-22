import React from 'react';
import { Header, HeaderNav, HeaderNavItem, SportIcon } from '@yandex-lego/components/Header/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const TabsHermioneCase = () => {
    return (
        <Header actions={<Button size="m" view="action">Войти</Button>}>
            <HeaderNav>
                <HeaderNavItem active href="#">Активный таб</HeaderNavItem>
                <HeaderNavItem href="#">Обычный таб</HeaderNavItem>
                <HeaderNavItem href="#" icon={<SportIcon />}>Таб с иконкой</HeaderNavItem>
            </HeaderNav>
        </Header>
    );
};
