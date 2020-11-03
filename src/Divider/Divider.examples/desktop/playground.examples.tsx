import React from 'react';
import { select, number, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Divider } from '../../Divider';

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const size = number('size', 1);
    const children = text('children', '');

    return (
        <div className={cnTheme(presets[preset])}>
            <Divider size={size}>{children}</Divider>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
