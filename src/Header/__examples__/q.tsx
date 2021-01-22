import React from 'react';

import { Header, Logoaas, InlineLogo } from '@yandex-lego/components/Header/desktop';
import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

export const Q = () => (
    <>
        <style>{'.Q {  --header-logo-height: 34px;;}'}</style>
        <div className={cnTheme(theme, ['Q'])}>
            <Header
                logo={
                    <>
                        <Logoaas color="000000" size={32.5} />
                        <InlineLogo src={'//frontend-test.s3.mds.yandex.net/yandex-lego/serp-header/_/2kgGDSSL.svg'} />
                    </>
                }
            />
        </div>
    </>
);
