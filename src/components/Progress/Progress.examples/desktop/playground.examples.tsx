import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';

import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Progress } from '../../Progress.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const value = number('value', 10) as any;
    const timing = select('timing', ['linear', ''], 'linear') as any;
    const maxValue = number('maxValue', 100) as any;

    return (
        <div className={cnTheme(presets[preset])}>
            <Progress value={value} timing={timing} maxValue={maxValue} />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
