import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Spin } from '../../Spin.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const view = select('view', ['default'], 'default') as any;
    const size = select('size', ['l', 'm', 's', 'xs', 'xxs'], 'm') as any;
    const position = select('position', ['', 'center'], '') as any;
    const progress = boolean('progress', true);

    return (
        <div className={cnTheme(presets[preset])}>
            <Spin view={view} progress={progress} position={position} size={size} />
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
