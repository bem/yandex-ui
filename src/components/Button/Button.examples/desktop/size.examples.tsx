import React from 'react';

import { Button } from '../../Button.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Size = () => (
    <>
        <Button view="default" size="l">
            Button
        </Button>{' '}
        <Button view="default" size="m">
            Button
        </Button>{' '}
        <Button view="default" size="s">
            Button
        </Button>
    </>
);

Size.story = {
    name: 'size',
};
