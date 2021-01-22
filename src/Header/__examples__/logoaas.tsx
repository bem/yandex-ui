import React from 'react';

import { Logoaas } from '@yandex-lego/components/Header/desktop';

export const logoaas = () => (
    <>
        <style>{`
            .YandexHeader-Logoaas {--header-logo-height: auto}
            .YandexHeader-Logoaas .YandexHeader-Image { margin: 0 }
        `}
        </style>
        <Logoaas />
        <br />
        <Logoaas circle size={32} />
        <br />
        <Logoaas size={35} color="000000" />
        <br />
        <Logoaas first="fff" circle />
        <br />
        <Logoaas first="000" circle name="YandexDoc" />
    </>
);
