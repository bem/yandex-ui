import React, { useState, useRef } from 'react';

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
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
                size="m"
                view="default"
                width="max"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <Select
                unsafe_scope={scopeRef}
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
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
                size="m"
                view="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />{' '}
            <Select
                unsafe_scope={scopeRef}
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
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
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
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
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
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
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
