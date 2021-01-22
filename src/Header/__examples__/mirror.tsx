import React, { FC } from 'react';

import { Header, HeaderNav, HeaderNavItem, InlineLogo, YandexLogo, SportIcon, NewsIcon, ServicesIcon } from '@yandex-lego/components/Header/desktop';
import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

type MirrorProps = {
    url?: string;
    lang?: 'ru' | 'en';
}

const MirrorBase: FC<MirrorProps> = ({ lang = 'ru', url = '4vTHu7yo' }) => (
    <Header
        logo={
            <>
                <YandexLogo lang={lang} />
                <InlineLogo src={`//frontend.s3.mds.yandex.net/yandex-lego/serp-header/_/${url}.svg`} href="//yandex.ru/Mirror" />
            </>
        }
    >
        <HeaderNav>
            <HeaderNavItem icon={<NewsIcon />}>Новости</HeaderNavItem>
            <HeaderNavItem icon={<SportIcon />}>Спорт</HeaderNavItem>
            <HeaderNavItem icon={<ServicesIcon />}>{lang === 'en' ? 'Services' : 'Все сервисы'}</HeaderNavItem>
        </HeaderNav>
    </Header>
);

export const Mirror = () => (
    <>
        <style>{'.Mirror { --header-nav-indent: 0 0 0 3px; --header-nav-space-all: 0 0 0 24px;}'}</style>
        <div className={cnTheme(theme, ['Mirror'])}>
            <MirrorBase />
            <MirrorBase lang="en" url="CTTYQgTa" />
        </div>
    </>
);
