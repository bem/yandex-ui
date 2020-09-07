import React, { useState } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Textarea } from '../../Textarea.bundle/desktop';
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
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const size = select('size', ['m', 's'], 'm') as any;
    const hasClear = boolean('hasClear', false);
    const disabled = boolean('disabled', false);
    const state = select('state', ['error', ''], '') as any;
    const hint = text('hint', '');

    return (
        <div className={cnTheme(presets[preset])}>
            <Textarea
                disabled={disabled}
                hasClear={hasClear}
                size={size}
                theme={theme}
                view={view}
                placeholder="Placeholder"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onClearClick={() => setValue('')}
                state={state}
                hint={hint}
                rows={0}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
