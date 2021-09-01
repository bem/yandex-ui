import React from 'react';

import { presets } from '../../Theme/presets';
import { Showcase } from '../Showcase@desktop';

const themes = [presets.default, presets.brand, presets.inverse];

export const Desktop = () => (
    <div style={{ display: 'flex' }}>
        {themes.map((theme, index) => (
            <Showcase key={index} theme={theme} />
        ))}
    </div>
);
