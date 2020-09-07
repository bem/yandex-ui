import React, { useState } from 'react';

import { Menu } from '../../Menu.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

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

export const Theme = () => {
    const [value, setValue] = useState('a');

    return (
        <Menu size="m" theme="normal" items={items} value={value} onChange={(event: any) => setValue(event.target.value)} />
    );
};

Theme.story = {
    name: 'theme',
};

export const Size = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <>
            <Menu
                size="m"
                view="default"
                items={items}
                value={value1}
                onChange={(event: any) => setValue1(event.target.value)}
            />
            <Menu
                size="s"
                view="default"
                items={items}
                value={value2}
                onChange={(event: any) => setValue2(event.target.value)}
            />
        </>
    );
};

Size.story = {
    name: 'size',
};

export const View = () => {
    const [value, setValue] = useState('a');

    return (
        <Menu size="m" view="default" items={items} value={value} onChange={(event: any) => setValue(event.target.value)} />
    );
};

View.story = {
    name: 'view',
};

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

Width.story = {
    name: 'width',
};
