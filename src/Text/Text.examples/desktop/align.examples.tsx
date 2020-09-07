import React from 'react';

import { Text } from '../../Text.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../example-config';
import { text } from './assets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Align = () => (
    <>
        <Text
            typography="display-xl"
            weight="light"
        >
            { text }
        </Text>
        <Text
            as="div"
            typography="display-xl"
            weight="light"
            style={{
                direction: 'rtl',
            }}
        >
            משימתו של יאנדקס היא לעזור לאנשים לפתור בעיות ולהשיג את מטרותיהם בחיים.
        </Text>
    </>
);

Align.story = {
    name: 'align',
};
