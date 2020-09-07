import React from 'react';

import { Text } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';
import { text } from './assets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Ellipsis = () => (
    <Text
        typography="display-xl"
        weight="light"
        maxLines={1}
        overflow="ellipsis"
    >
        { text }
    </Text>
);

Ellipsis.story = {
    name: 'ellipsis',
};
