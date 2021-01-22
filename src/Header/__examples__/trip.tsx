import React from 'react';

import { Header, HeaderNav, HeaderNavItem, YandexLogo, Logoaas } from '@yandex-lego/components/Header/desktop';
import { Image } from '@yandex-lego/components/Image/desktop/bundle';

export const Trip = () => (
    <Header
        logo={
            <>
                <YandexLogo href="//staff.yandex-team.ru" />
                <Logoaas name="Командировки" href="//yandex.ru/pogoda" />
            </>
        }
        actions={<div><Image src="https://jing.yandex-team.ru/files/axaxaman/actions.png" /></div>}
    >
        <HeaderNav>
            <HeaderNavItem>Мои поездки</HeaderNavItem>
            <HeaderNavItem>Персональные данные</HeaderNavItem>
            <HeaderNavItem>Информация</HeaderNavItem>
        </HeaderNav>
    </Header>
);
