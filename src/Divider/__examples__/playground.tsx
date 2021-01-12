import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Divider } from '@yandex-lego/components/Divider';

export const Playground = () => {
    const size = number('size', 1);
    const children = text('children', '');

    return <Divider size={size}>{children}</Divider>;
};
