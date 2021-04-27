import React, { FC } from 'react';

import { Header, HeaderNav, HeaderNavItem, Logoaas, YandexLogo } from '@yandex-lego/components/Header/desktop';
import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

type DirectoryProps = {
    name?: string;
    lang?: 'ru' | 'en';
}

const DirectoryBase: FC<DirectoryProps> = ({ lang = 'ru', name = 'Справочник' }) => (
    <Header
        logo={
            <>
                <YandexLogo rebranding lang={lang} circle />
                <Logoaas href="//yandex.ru/sprav/add" rebranding color="red" first="white" size={32} name={' ' + name} />
            </>
        }
    >
        <HeaderNav>
            <HeaderNavItem active>Мои организации</HeaderNavItem>
            <HeaderNavItem>Мои заявки</HeaderNavItem>
            <HeaderNavItem>Правки</HeaderNavItem>
        </HeaderNav>
    </Header>
);

export const Directory = () => (
    <>
        <style>{'.Directory { --header-nav-link-color-base: #222426; --header-logoaas-indent: 0; --header-logo-circle-indent-top: 0; }'}</style>
        <div className={cnTheme(theme, ['Directory'])}>
            <DirectoryBase />
            <DirectoryBase lang="en" name="Directory" />
            <DirectoryBase lang="en" name="Rehber" />
        </div>
    </>
);
