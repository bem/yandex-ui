import React, { FC } from 'react';
import { Header, HeaderNav, HeaderNavItem, InlineLogo, YandexLogo } from '@yandex-lego/components/Header/desktop';
import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

type WeatherProps = {
    url?: string;
    lang?: 'ru' | 'en';
}

const WeatherBase: FC<WeatherProps> = ({ lang = 'ru', url = '2KkzGoNt' }) => (
    <Header
        logo={
            <>
                <YandexLogo lang={lang} />
                <InlineLogo
                    src={`//frontend.s3.mds.yandex.net/yandex-lego/serp-header/_/${url}.svg`}
                    href="//yandex.ru/pogoda" />
            </>
        }
    >
        <HeaderNav>
            <HeaderNavItem active>Прогноз На 10 дней</HeaderNavItem>
            <HeaderNavItem>Прогноз на неделю</HeaderNavItem>
        </HeaderNav>
    </Header>
);

export const Weather = () => (
    <>
        <style>{'.Weather { --header-nav-link-color-base: #222426; --header-content-space-all: 0 24px; }'}</style>
        <div className={cnTheme(theme, ['Weather'])}>
            <WeatherBase />
            <WeatherBase lang="en" url="3fdbXTQZ" />
            <WeatherBase url="48z15E4G" />
            <WeatherBase url="24cRX8yJ" />
            <WeatherBase lang="en" url="5nQWWvMA" />
        </div>
    </>
);
