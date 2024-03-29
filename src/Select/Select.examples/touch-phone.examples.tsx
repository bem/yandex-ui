import React, { useState } from 'react';
import { select, boolean, object } from '@storybook/addon-knobs';

import { cnTheme } from '../../Theme';
import { presets, presetsKeys } from '../../Theme/presets';
import { Select } from '../touch-phone/bundle';

export default {
    title: 'Controls/Select/touch-phone',
    parameters: {
        docs: {
            readme: require('../readme.md'),
        },
    },
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

    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const disabled = boolean('disabled', false);
    const options = object('options', rawOptions);

    return (
        <div className={cnTheme(presets[preset])}>
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
