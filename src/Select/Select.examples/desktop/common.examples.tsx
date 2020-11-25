import React, { useState } from 'react';

import { Select } from '../../Select.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const options = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Width = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <div style={{ height: 200 }}>
            <Select
                size="m"
                view="default"
                width="max"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <Select
                size="m"
                view="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </div>
    );
};

Width.story = {
    name: 'width',
};

export const Size = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');

    return (
        <div style={{ height: 200 }}>
            <Select
                size="m"
                view="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />{' '}
            <Select
                size="s"
                view="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </div>
    );
};

Size.story = {
    name: 'size',
};

export const Theme = () => {
    const [value, setValue] = useState('a');

    return (
        <div style={{ height: 200 }}>
            <Select
                theme="normal"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

Theme.story = {
    name: 'theme',
};

export const View = () => {
    const [value, setValue] = useState('a');

    return (
        <div style={{ height: 200 }}>
            <Select
                view="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

View.story = {
    name: 'view',
};

export const Icon = () => {
    const [value, setValue] = useState('a');

    return (
        <div style={{ height: 200 }}>
            <Select
                view="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
                iconProps={{
                    type: 'arrow',
                }}
            />
        </div>
    );
};

Icon.story = {
    name: 'icon',
};

export const Type = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState(['a']);

    return (
        <div style={{ height: 200 }}>
            <Select
                view="default"
                size="m"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <Select
                view="default"
                size="m"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </div>
    );
};

Type.story = {
    name: 'type',
};
