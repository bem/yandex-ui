import React from 'react';

import { Text, TextColorValue } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators(),
    parameters,
};

export const ControlColor = () => (
    <>
        {
            [
                'control-primary',
                'control-secondary',
                'control-passive',
                'control-ghost',
                'control-faint',
                'control-disable',
                'control-link',
                'control-error',
            ].map((color: string, idx: number) => (
                <Text
                    as="div"
                    key={idx}
                    typography="control-xl"
                    weight="light"
                    color={color as TextColorValue}
                    style={{ backgroundColor: color === 'control-faint' ? '#000' : undefined }}
                >
                    { `${color.charAt(0).toUpperCase()}${color.slice(1)} color` }
                </Text>

            ))
        }
    </>
);

ControlColor.story = {
    name: 'control-color',
};
