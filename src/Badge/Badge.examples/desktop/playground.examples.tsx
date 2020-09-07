import React from 'react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Badge } from '../../Badge';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const IconTwo = () => (
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M4.5 18a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm11 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0-3a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM19 4H5.78L4.97.758A.998.998 0 0 0 4 0H1a1 1 0 0 0 0 2h2.22l.805 3.222.01.042 1.995 7.98a1 1 0 0 0 1.135.743l11.017-1.837c1.02-.17 1.818-1.11 1.818-2.14V5a1 1 0 0 0-1-1zm-1 6.01c0 .05-.085.157-.146.167L7.746 11.862 6.28 6H18v4.01z" /></svg>
);

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const content = text('content', '10');
    const withChildren = boolean('withChildren', true);

    return (
        <div className={cnTheme(presets[preset])}>
            <Badge content={content}>
                {withChildren && <IconTwo />}
            </Badge>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
