import React from 'react';

import { Header } from '@yandex-lego/components/Header';

export const Playground = () => {
    return (
        <>
            <Header />
            <br />
            <Header logo="logo" actions="actions">children</Header>
        </>
    );
};
