import React from 'react';

import { Text, TextColorValue } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators(),
    parameters,
};

export const LinkColor = () => (
    <>
        {
            [
                'link',
                'link-external',
                'link-minor',
                'link-hover',
            ].map((color: string, idx: number) => (
                <Text
                    as="div"
                    key={idx}
                    typography="body-short-xl"
                    weight="light"
                    color={color as TextColorValue}
                >
                    { `${color.charAt(0).toUpperCase()}${color.slice(1)} color` }
                </Text>

            ))
        }
    </>
);

LinkColor.story = {
    name: 'control-color',
};
