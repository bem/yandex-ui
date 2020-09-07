import React, { useState, useRef } from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';

import { cnTheme } from '../../Theme';
import { presets, presetsKeys } from '../../Theme/presets';
import { Select } from '../Select.bundle/touch-phone';
import { EXAMPLE_TOUCH_PHONE_TOKEN, createDecorators, parameters } from './examples-config';

export default {
    title: EXAMPLE_TOUCH_PHONE_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const rawOptions = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Playground = () => {
    const [value, setValue] = useState('a');
    const scopeRef = useRef(null);

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const disabled = boolean('disabled', false);
    const options = object('options', rawOptions);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }} className={cnTheme(presets[preset])}>
            <Select
                disabled={disabled}
                theme={theme}
                size={size}
                view={view}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
