import React from 'react';

import { YandexLogo as Logo } from '@yandex-lego/components/Header/desktop';

export const YandexLogo = () => (
    <>
        <Logo />
        <br />
        <Logo lang="en" />
        <br />
        <Logo circle />
        <br />
        <Logo circle lang="en" />
    </>
);
