import React, { useState } from 'react';

import { Radiobox, RadioOptionProps } from '../../Radiobox.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Size = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');
    const options: RadioOptionProps[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ];

    return (
        <>
            {'_size_m: '}
            <Radiobox
                size="m"
                view="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <br />
            {'_size_s: '}
            <Radiobox
                size="s"
                view="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </>
    );
};

Size.story = {
    name: 'size',
};

export const Theme = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');
    const options: RadioOptionProps[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ];

    return (
        <>
            {'_theme_normal: '}
            <Radiobox
                size="m"
                theme="normal"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />
            <br />
            {'_theme_pseudo: '}
            <Radiobox
                size="m"
                theme="pseudo"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </>
    );
};

Theme.story = {
    name: 'theme',
};

export const View = () => {
    const [value, setValue] = useState('a');
    const options: RadioOptionProps[] = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ];

    return (
        <>
            {'_view_default: '}
            <Radiobox
                size="m"
                view="default"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </>
    );
};

View.story = {
    name: 'view',
};
