import React from 'react';

import { presets } from '../../Theme/presets';
import { Showcase } from '../Showcase@touch-phone';

const themes = [presets.default, presets.brand, presets.inverse];

export const TouchPhone = () => (
    <div style={{ display: 'flex' }}>
        {themes.map((theme, index) => (
            <Showcase key={index} theme={theme} />
        ))}
    </div>
);
