import React, { FC } from 'react';

import { Header, YandexLogo, InlineLogo } from '@yandex-lego/components/Header/desktop';
import { theme } from '@yandex-lego/components/Theme/presets/default';
import { cnTheme } from '@yandex-lego/components/Theme';

type LocalProps = {
    url?: string;
    lang?: 'ru' | 'en';
    width?: number;
}

const LocalBase: FC<LocalProps> = ({ lang = 'ru', width = 58, url = '3HhToPWM' }) => (
    <Header
        logo={
            <>
                <YandexLogo lang={lang} />
                <InlineLogo
                    src={`//frontend.s3.mds.yandex.net/yandex-lego/serp-header/_/${url}.svg`}
                    width={width}
                    href="//yandex.ru/pogoda"
                />
            </>
        }
    />
);

export const Local = () => (
    <>
        <style>{'.Local { --header-content-max-width: 869px; }'}</style>
        <div className={cnTheme(theme, ['Local'])}>
            <LocalBase />
            <LocalBase lang="en" url="3CQqbzNm" width={82} />
            <LocalBase lang="en" width={55} url="4emqbXGm" />
        </div>
    </>
);
