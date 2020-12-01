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

export const Width = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <>
            <Menu
                size="m"
                view="default"
                width="max"
                items={items}
                value={value1}
                onChange={(event: any) => setValue1(event.target.value)}
            />
            <Menu
                size="m"
                view="default"
                width="auto"
                items={items}
                value={value2}
                onChange={(event: any) => setValue2(event.target.value)}
            />
        </>
    );
};
