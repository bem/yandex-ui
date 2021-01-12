import React from 'react';

import { Showcase } from '../../Showcase@desktop';
import { EXAMPLE_DESKTOP_TOKEN, themes, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    parameters,
};

export const Default = () => (
    <div style={{ display: 'flex' }}>
        {themes.map((theme, index) => (
            <Showcase key={index} theme={theme} />
        ))}
    </div>
);
