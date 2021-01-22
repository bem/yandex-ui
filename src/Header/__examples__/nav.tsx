import React from 'react';

import { Header, HeaderNav, HeaderNavItem } from '@yandex-lego/components/Header/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const nav = () => {
    return (
        <>
            <Header>
                <HeaderNav>
                    <HeaderNavItem href="/">Таб</HeaderNavItem>
                    <HeaderNavItem href="/">По</HeaderNavItem>
                    <HeaderNavItem href="/">Умолчанию</HeaderNavItem>
                    <HeaderNavItem href="/" active>Активный</HeaderNavItem>
                </HeaderNav>
            </Header>
            <Header>
                <HeaderNav>
                    <Button view="action" size="m">Кнопка</Button>
                    <Button view="clear" size="m">Кнопка</Button>
                    <Button view="link" size="m">Кнопка</Button>
                    <Button view="raised" size="m">Кнопка</Button>
                    <Button view="default" checked size="m">Кнопка</Button>
                </HeaderNav>
            </Header>
        </>
    );
};
