import React, { useState } from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';
import { cnTheme } from '@yandex-lego/components/Theme';
import { presets, presetsKeys } from '@yandex-lego/components/Theme/presets';
import { Select } from '@yandex-lego/components/Select/desktop/bundle';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators()],
    parameters,
};

const rawOptions = [
    { value: 1, content: 1 },
    { value: 2, content: 2 },
    { value: 'c', content: 'hello' },
    { value: 'd', content: 'darkness' },
    { value: 'e', content: 'my', disabled: true },
    { value: 'f', content: 'old' },
    { value: 'g', content: 'friend' },
];

export const Playground = () => {
    const [value, setValue] = useState('с');

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const disabled = boolean('disabled', false);
    const renderControl = boolean('renderControl', false);
    const options = object('options', rawOptions);

    return (
        <div className={cnTheme(presets[preset])}>
            <Select
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
