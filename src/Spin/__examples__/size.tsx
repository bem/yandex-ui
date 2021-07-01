import React from 'react';
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle';

export const Size = () => (
    <>
        <Spin progress view="default" size="l" />
        <Spin progress view="default" size="m" />
        <Spin progress view="default" size="s" />
        <Spin progress view="default" size="xs" />
        <Spin progress view="default" size="xxs" />
    </>
);
