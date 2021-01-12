import React, { useState } from 'react';
import { select, boolean, object } from '@storybook/addon-knobs';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';

const rawItems = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    {
        items: [
            { value: 'c', content: 'Желает', disabled: true },
            { value: 'd', content: 'Знать' },
            { value: 'e', content: 'Где' },
        ],
    },
];

export const Playground = () => {
    const [value, setValue] = useState('a');

    const size = select('size', ['s', 'm'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const width = select('width', ['max', 'auto'], 'auto') as any;
    const disabled = boolean('disabled', false);
    const items = object('items', rawItems);

    return (
        <Menu
            theme={theme}
            disabled={disabled}
            size={size}
            view={view}
            width={width}
            items={items}
            value={value}
            onChange={(event: any) => setValue(event.target.value)}
        />
    );
};
