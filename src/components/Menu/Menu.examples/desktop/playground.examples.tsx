import React, { useState } from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';

import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Menu } from '../../Menu.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const rawItems = [
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

export const Playground = () => {
    const [value, setValue] = useState('a');

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['s', 'm'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const width = select('width', ['max', 'auto'], 'auto') as any;
    const disabled = boolean('disabled', false);
    const items = object('items', rawItems);

    return (
        <div className={cnTheme(presets[preset])}>
            <Menu
                theme={theme}
                disabled={disabled}
                size={size}
                view={view}
                width={width}
                items={items}
                value={value}
                onChange={(event: any) => setValue(event.target.value)}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
