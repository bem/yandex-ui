import React from 'react';

import { Text } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';
import { text } from './assets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const FadeHorizontal = () => (
    <Text
        typography="display-xl"
        weight="light"
        maxLines={2}
        overflow="fade-horizontal"
    >
        { text }
    </Text>
);

FadeHorizontal.story = {
    name: 'fade-horizontal',
};
