import React, { useState } from 'react';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';

const items = [
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

export const View = () => {
    const [value, setValue] = useState('a');

    return (
        <Menu
            size="m"
            view="default"
            items={items}
            value={value}
            onChange={(event: any) => setValue(event.target.value)}
        />
    );
};
