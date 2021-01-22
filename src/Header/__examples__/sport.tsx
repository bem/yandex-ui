import React, { FC } from 'react';

import { Header, HeaderNav, HeaderNavItem, InlineLogo, YandexLogo, MirrorIcon, WeatherIcon, NewsIcon, ServicesIcon } from '@yandex-lego/components/Header/desktop';
import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

type SportProps = {
    url?: string;
    lang?: 'ru' | 'en';
}

const SportBase: FC<SportProps> = ({ lang = 'ru', url = '39yrhWEz' }) => (
    <Header
        logo={
            <>
                <YandexLogo lang={lang} />
                <InlineLogo
                    src={`//frontend.s3.mds.yandex.net/yandex-lego/serp-header/_/${url}.svg`}
                    href="//yandex.ru/sport" />
            </>
        }
    >
        <HeaderNav>
            <HeaderNavItem icon={<WeatherIcon />}>Погода</HeaderNavItem>
            <HeaderNavItem icon={<MirrorIcon />}>Зеркало</HeaderNavItem>
            <HeaderNavItem icon={<NewsIcon />}>Новости</HeaderNavItem>
            <HeaderNavItem icon={<ServicesIcon />}>{lang === 'en' ? 'Services' : 'Все сервисы'}</HeaderNavItem>
        </HeaderNav>
    </Header>
);

export const Sport = () => (
    <>
        <style>{'.Sport { --header-nav-indent: 0 0 0 3px; --header-nav-space-all: 0 0 0 24px;}'}</style>
        <div className={cnTheme(theme, ['Sport'])}>
            <SportBase />
            <SportBase lang="en" url="2xrFgDtU" />
        </div>
    </>
);
