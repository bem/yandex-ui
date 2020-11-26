import React, { useState } from 'react';
import { select, boolean, object } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { RadioButton } from '../../RadioButton.bundle/desktop';
import { Icon } from '../../../Icon/Icon.bundle/desktop';

export const Playground = () => {
    const [value, setValue] = useState('b');

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['s', 'm', 'l'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const disabled = boolean('disabled', false);
    const options = object('options', [
        {
            value: 'a',
            children: 'Option A',
        },
        {
            value: 'b',
            children: (
                <Icon type="filter" style={{ width: 12 }} />
            ),
        },
        {
            value: 'c',
            children: (
                <>
                    <Icon glyph="type-check" style={{ width: 16, marginRight: 4 }} />
                    Option C
                </>
            ),
        },
        {
            value: 'd',
            children: (
                <>
                    Option D (
                    <b>disabled</b>
                    )
                </>
            ),
            disabled: true,
        },
        {
            value: 'e',
            children: (
                <>
                    Option E
                    <Icon glyph="type-check" style={{ width: 16, marginLeft: 4 }} />
                </>
            ),
        },
    ]);

    return (
        <div className={cnTheme(presets[preset])}>
            <RadioButton
                size={size}
                view={view}
                disabled={disabled}
                options={options}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                aria-label="Радиогруппа"
            />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
