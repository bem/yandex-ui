import React from 'react';

import { Text } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';
import { text } from './assets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators(),
    parameters,
};

export const Fade = () => (
    <Text
        typography="display-xl"
        weight="light"
        maxLines={1}
        overflow="fade"
    >
        { text }
    </Text>
);

Fade.story = {
    name: 'fade',
};
