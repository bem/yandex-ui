import React, { useState } from 'react';
import { select, boolean, object } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Radiobox, RadioOptionProps } from '../../Radiobox.bundle/desktop';

export const Playground = () => {
    const [value, setValue] = useState('a');

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', 'outline', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'pseudo'], 'normal') as any) : null;
    const options = object<RadioOptionProps[]>('options', [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ]);
    const disabled = boolean('disabled', false);

    return (
        <div className={cnTheme(presets[preset])}>
            <Radiobox
                disabled={disabled}
                size={size}
                theme={theme}
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
