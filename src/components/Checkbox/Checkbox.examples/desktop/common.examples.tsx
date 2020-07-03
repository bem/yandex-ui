import React, { useState } from 'react';

import { Checkbox } from '../../Checkbox.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const View = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Checkbox size="m" view="default" label="Label" onChange={() => setChecked(!checked)} checked={checked} />
        </>
    );
};

View.story = {
    name: 'view',
};

export const Size = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <>
            <Checkbox
                label="Label"
                size="m"
                view="default"
                onChange={() => setChecked1(!checked1)}
                checked={checked1}
            />
            <Checkbox
                label="Label"
                size="s"
                view="default"
                onChange={() => setChecked2(!checked2)}
                checked={checked2}
            />
        </>
    );
};

Size.story = {
    name: 'size',
};

export const Theme = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            {['normal', 'pseudo'].map((theme: any) => (
                <div
                    key={theme}
                    style={{
                        padding: 4,
                        border: 'dashed #b0b0af 1px',
                        background: 'grey',
                    }}
                >
                    <Checkbox
                        label="checkbox"
                        theme={theme}
                        size="m"
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                    />
                </div>
            ))}
        </>
    );
};

Theme.story = {
    name: 'theme',
};

export const Indeterminate = () => {
    const [indeterminate1, setIndeterminate1] = useState(false);
    const [indeterminate2, setIndeterminate2] = useState(false);

    return (
        <>
            <div style={{ padding: 4 }}>
                <Checkbox
                    label="Label"
                    theme="normal"
                    size="m"
                    onChange={() => setIndeterminate1(!indeterminate1)}
                    indeterminate={indeterminate1}
                />
            </div>
            <div style={{ padding: 4 }}>
                <Checkbox
                    label="Label"
                    size="m"
                    view="default"
                    onChange={() => setIndeterminate2(!indeterminate2)}
                    indeterminate={indeterminate2}
                />
            </div>
        </>
    );
};

Indeterminate.story = {
    name: 'indeterminate',
};

export const Lines = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{ fontFamily: 'var(--control-font-family)' }}>
            {'one:'}
            {['s', 'm'].map((size: any) => (
                <div key={size} style={{ padding: 4 }}>
                    <Checkbox
                        label="Однострочный checkbox с длинной подписью"
                        view="default"
                        size={size}
                        onChange={() => setChecked(!checked)}
                        checked={checked}
                        lines="one"
                    />
                </div>
            ))}
            <br />
            {'multi:'}
            <div style={{ padding: 4 }}>
                {'Чекбоксы\u00a0\u00a0'}
                <Checkbox
                    label="выравниваются"
                    view="default"
                    size="s"
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    lines="multi"
                />
                {'\u00a0по базовой\u00a0\u00a0'}
                <Checkbox
                    label="линии"
                    view="default"
                    size="m"
                    onChange={() => setChecked(!checked)}
                    checked={checked}
                    lines="multi"
                />
                {'.'}
            </div>
        </div>
    );
};

Lines.story = {
    name: 'lines',
};
