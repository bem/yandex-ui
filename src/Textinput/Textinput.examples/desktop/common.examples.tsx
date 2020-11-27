import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';

import { Textinput } from '../../Textinput.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { Spacer } from '../../../Spacer/Spacer';
import { Spin } from '../../../Spin/Spin.bundle/desktop';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

function updateCaret(node: HTMLElement): void {
    if (typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined') {
        const range = document.createRange();
        range.selectNodeContents(node);
        range.collapse(false);
        const selection = window.getSelection();
        if (selection !== null) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}

export const CustomControl = () => {
    const [value1, setValue1] = useState('тут внутри div contenteditable, и всё работает');

    const renderControl = useCallback(({ type, value, onChange, controlRef, ...props }: any) => {
        return (
            <div
                style={{ display: 'flex', alignItems: 'center', padding: 'var(--textarea-size-m-spaceAll)' }}
                ref={controlRef}
                contentEditable
                className="Textinput-Control"
                onInput={(event) => {
                    if (onChange) {
                        const value = (event.target as HTMLDivElement).textContent || '';
                        (event.target as HTMLInputElement).value = value;
                        (event.currentTarget as HTMLInputElement).value = value;
                        updateCaret(event.target as HTMLDivElement);
                        onChange(event);
                    }
                }}
                {...props}
            >
                {value}
            </div>
        );
    }, []);

    return (
        <Textinput
            hasClear
            size="m"
            view="default"
            value={value1}
            onChange={(event) => setValue1(event.target.value)}
            renderControl={renderControl}
        />
    );
};

export const Baseline = () => (
    <div style={{ display: 'inline-block', width: 330 }}>
        <Textinput baseline size="m" view="default" defaultValue="Hello" style={{ margin: 4, width: 150 }} />
        <Textinput baseline size="s" view="default" defaultValue="World" style={{ margin: 4, width: 150 }} />
    </div>
);

Baseline.story = {
    name: 'baseline',
};

export const HasClear = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <>
            <div style={{ padding: 4 }}>
                <Textinput
                    hasClear
                    size="m"
                    view="default"
                    value={value1}
                    onChange={(event) => setValue1(event.target.value)}
                    onClearClick={() => setValue1('')}
                />
            </div>
            <div style={{ padding: 4 }}>
                <Textinput
                    hasClear
                    size="m"
                    theme="normal"
                    value={value2}
                    onChange={(event) => setValue2(event.target.value)}
                    onClearClick={() => setValue2('')}
                />
            </div>
        </>
    );
};

HasClear.story = {
    name: 'hasClear',
};

export const Pin = () => {
    const rPins = ['round-round', 'round-clear', 'clear-round', 'round-brick', 'brick-round'];
    const qPins = ['brick-brick', 'brick-clear', 'clear-brick'];
    return (
        <>
            <p>Поля со скругленными уголками</p>
            {rPins.map((pin: any) => (
                <Textinput key={pin} size="m" view="default" pin={pin} value={`pin=${pin}`} />
            ))}
            <p>Поля с прямоугольными уголками</p>
            {qPins.map((pin: any) => (
                <Textinput key={pin} size="m" view="default" pin={pin} value={`pin=${pin}`} />
            ))}
            <p>Поле без боковых границ</p>
            <Textinput size="m" view="default" pin="clear-clear" value="pin=clear-clear" />
        </>
    );
};

Pin.story = {
    name: 'pin',
};

export const Size = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput size="m" view="default" defaultValue="size m" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput size="s" view="default" defaultValue="size s" />
        </div>
    </>
);

Size.story = {
    name: 'size',
};

export const Theme = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput theme="normal" size="m" defaultValue="theme normal" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput theme="websearch" defaultValue="theme websearch" />
        </div>
    </>
);

Theme.story = {
    name: 'theme',
};

export const Type = () => (
    <>
        <div style={{ padding: 4 }}>
            <Textinput size="m" view="default" type="number" defaultValue="200" />
        </div>
        <div style={{ padding: 4 }}>
            <Textinput size="m" view="default" type="password" defaultValue="secret" />
        </div>
    </>
);

Type.story = {
    name: 'type',
};

export const View = () => (
    <>
        <Textinput size="m" view="default" defaultValue="view default" />
    </>
);

View.story = {
    name: 'view',
};

export const State = () => (
    <>
        <Textinput state="error" hint="Error message" size="m" view="default" defaultValue="view default" />
    </>
);

State.story = {
    name: 'state',
};

export const Debounce = () => {
    const [value, setValue] = useState('');
    const [typing, setTyping] = useState(false);
    return (
        <Textinput
            debounceTimeout={500}
            size="m"
            view="default"
            value={value}
            style={{ maxWidth: 300 }}
            onChange={(event) => {
                action('onChange')(event.target.value);
                setTyping(false);
                setValue(event.target.value);
            }}
            onInput={(event) => {
                action('onInput')(event.target.value);
                setTyping(true);
            }}
            iconRight={(typing || undefined) && (
                <Spacer all="10px">
                    <Spin view="default" size="xxs" progress />
                </Spacer>
            )}
        />
    );
};

Debounce.story = {
    name: 'debounce',
};
