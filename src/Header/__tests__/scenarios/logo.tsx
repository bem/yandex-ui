import React from 'react';
import { Header, YandexLogo, Logoaas } from '@yandex-lego/components/Header/desktop';

export const LogoHermioneCase = () => {
    return (
        <Header
            logo={(
                <>
                    <YandexLogo />
                    <Logoaas name="Lego" />
                </>
            )}
            actions={(
                <>
                    <YandexLogo lang="en" />
                    <YandexLogo circle />
                    <YandexLogo circle lang="en" />
                </>
            )}
        />
    );
};
