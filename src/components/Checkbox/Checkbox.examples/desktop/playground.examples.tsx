import React, { useState } from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Checkbox } from '../../Checkbox.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const [checked, setChecked] = useState(false);

    const preset = select('theme-preset', presetsKeys, 'default');
    const label = text('label', 'Label');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'pseudo'], 'normal') as any) : null;
    const disabled = boolean('disabled', false);
    const indeterminate = boolean('indeterminate', false) as any;

    return (
        <div className={cnTheme(presets[preset])}>
            <Checkbox
                theme={theme}
                view={view}
                size={size}
                onChange={() => setChecked(!checked)}
                checked={checked}
                label={label}
                disabled={disabled}
                indeterminate={indeterminate}
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
