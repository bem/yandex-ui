import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Textarea, TextareaWithAutoResize } from '../../Textarea.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const HasClear = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            <Textarea
                hasClear
                size="m"
                view="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                onClearClick={() => setValue1('')}
            />
            <Textarea
                hasClear
                size="m"
                theme="normal"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                onClearClick={() => setValue2('')}
            />
        </>
    );
};

HasClear.story = {
    name: 'hasClear',
};

export const Theme = () => (
    <>
        <Textarea size="m" theme="normal" defaultValue="theme normal" />
    </>
);

Theme.story = {
    name: 'theme',
};

export const Size = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textarea size="m" view="default" defaultValue="size m" />
        </div>
        <div style={{ padding: 4 }}>
            <Textarea size="s" view="default" defaultValue="size s" />
        </div>
    </>
);

Size.story = {
    name: 'size',
};

export const View = () => (
    <>
        <Textarea size="m" view="default" defaultValue="view default" />
    </>
);

View.story = {
    name: 'view',
};

export const State = () => (
    <>
        <Textarea state="error" hint="Error message" size="m" view="default" defaultValue="view default" />
    </>
);

State.story = {
    name: 'state',
};

export const Debounce = () => {
    const [value, setValue] = useState('');
    const [typing, setTyping] = useState(false);
    return (
        <div style={{ maxWidth: 300 }}>
            <Textarea
                debounceTimeout={500}
                size="m"
                view="default"
                value={value}
                onChange={(event) => {
                    action('onChange')(event.target.value);
                    setTyping(false);
                    setValue(event.target.value);
                }}
                onInput={(event) => {
                    action('onInput')(event.target.value);
                    setTyping(true);
                }}
            />
            <pre style={{ marginTop: 16 }}>
                {typing ? 'Печатает...' : ''}
            </pre>
        </div>
    );
};

Debounce.story = {
    name: 'debounce',
};

export const AutoResize = () => {
    const [value, setValue] = useState('Continue typing text until it will fill entire textarea. ' +
        'Feel free to unleash your keyboard shortcuts Ninja skills like a: CMD+A, CMD+C, CMD+V. ' +
        'Continue typing more text like these here ');

    return (
        <>
            <TextareaWithAutoResize
                hasClear
                size="m"
                view="default"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
};

AutoResize.story = {
    name: 'autoResize',
};
