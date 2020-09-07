import React from 'react';

import { Text, TextColorValue } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Color = () => (
    <>
        {
            ([
                'primary',
                'brand',
                'inverse',
                'promo',
                'secondary',
                'ghost',
                'disable',
                'warning',
                'success',
                'alert',
            ]).map((color: string, idx: number) => (
                <Text
                    as="div"
                    key={idx}
                    typography="display-xl"
                    weight="light"
                    color={color as TextColorValue}
                    style={{ backgroundColor: color === 'inverse' ? '#000' : undefined }}
                >
                    { `${color.charAt(0).toUpperCase()}${color.slice(1)} color` }
                </Text>

            ))
        }
    </>
);

Color.story = {
    name: 'color',
};
