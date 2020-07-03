import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Divider } from '../../Divider';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

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
