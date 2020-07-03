import React from 'react';

import { Showcase } from '../../Showcase@touch-phone';
import { EXAMPLE_TOUCH_PHONE_TOKEN, createDecorators, themes, parameters } from '../examples-config';

export default {
    title: EXAMPLE_TOUCH_PHONE_TOKEN,
    decorators: createDecorators({ scope: 'touch-phone' }),
    parameters,
};

export const Default = () => (
    <div style={{ display: 'flex' }}>
        {themes.map((theme, index) => (
            <Showcase key={index} theme={theme} />
        ))}
    </div>
);

Default.story = {
    name: 'default',
};
