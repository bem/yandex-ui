import React, { useState } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Textinput } from '../../Textinput.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const [value, setValue] = useState('');

    const preset = select('theme-preset', presetsKeys, 'default');
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'websearch'], 'normal') as any) : null;
    const size = theme !== 'websearch' ? (select('size', ['m', 's'], 'm') as any) : null;
    const pin = select(
        'pin',
        [
            '',
            'brick-brick',
            'brick-clear',
            'brick-round',
            'clear-brick',
            'clear-clear',
            'clear-round',
            'round-brick',
            'round-clear',
            'round-round',
        ],
        '',
    ) as any;
    const type = select('type', ['text', 'password', 'number'], 'text');
    const hasClear = boolean('hasClear', false);
    const disabled = boolean('disabled', false);
    const state = select('state', ['error', ''], '') as any;
    const hint = text('hint', '');

    return (
        <div className={cnTheme(presets[preset])}>
            <Textinput
                disabled={disabled}
                theme={theme}
                size={size}
                view={view}
                pin={pin}
                hasClear={hasClear}
                placeholder="Placeholder"
                value={value}
                type={type}
                onChange={(event) => setValue(event.target.value)}
                onClearClick={() => setValue('')}
                state={state}
                hint={hint}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
