import React, { useState, useRef } from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Select } from '../../Select.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const rawOptions = [
    { value: 1, content: 1 },
    { value: 2, content: 2 },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Playground = () => {
    const [value, setValue] = useState('с');
    const scopeRef = useRef(null);

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const disabled = boolean('disabled', false);
    const renderControl = boolean('renderControl', false);
    const options = object('options', rawOptions);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }} className={cnTheme(presets[preset])}>
            <Select
                unsafe_scope={scopeRef}
                disabled={disabled}
                theme={theme}
                size={size}
                view={view}
                value={value}
                renderControl={renderControl}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
