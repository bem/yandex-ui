import React, { FC } from 'react';
import { Header } from '@yandex-lego/components/Header/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const DefaultHermioneCase: FC<any> = () => {
    return (
        <Header actions={<Button size="m" view="action">Войти</Button>} />
    );
};
