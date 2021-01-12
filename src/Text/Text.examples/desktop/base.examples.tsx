import React from 'react';

import { Text } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';
import { text } from './assets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators(),
    parameters,
};

export const Base = () => (
    <Text
        typography="display-xl"
        weight="light"
    >
        { text }
    </Text>
);

Base.story = {
    name: 'base',
};
