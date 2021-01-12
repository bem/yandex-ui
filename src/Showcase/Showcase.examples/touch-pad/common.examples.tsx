import React from 'react';

import { Showcase } from '../../Showcase@touch-pad';
import { EXAMPLE_TOUCH_PAD_TOKEN, themes, parameters } from '../examples-config';

export default {
    title: EXAMPLE_TOUCH_PAD_TOKEN,
    parameters,
};

export const Default = () => (
    <div style={{ display: 'flex' }}>
        {themes.map((theme, index) => (
            <Showcase key={index} theme={theme} />
        ))}
    </div>
);
