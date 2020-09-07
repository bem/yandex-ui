import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Spacer } from '../../Spacer';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const all = text('all', '10px');
    const vertical = text('vertical', '1rem');
    const horizontal = text('horizontal', '1em');
    const top = number('top', 10);
    const bottom = number('bottom', 10);
    const left = number('left', 10);
    const right = number('right', 10);

    return (
        <div className={cnTheme(presets[preset])}>
            <Spacer all={all}>
                Spacer изменяется через all, значение передаем как string
            </Spacer>
            <Spacer vertical={vertical} horizontal={horizontal}>
                Spacer изменяется через vertical horizontal, значение передаем как string
            </Spacer>
            <Spacer top={top} bottom={bottom} left={left} right={right}>
                Spacer изменяется через top bottom left right, значения передаем как number
            </Spacer>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
