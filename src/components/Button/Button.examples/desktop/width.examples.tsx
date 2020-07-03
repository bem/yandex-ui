import React from 'react';

import { Button } from '../../Button.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Width = () => (
    <>
        <Button view="default" width="max" size="m">
            Button
        </Button>{' '}
        <Button view="default" width="auto" size="m">
            Button
        </Button>
    </>
);

Width.story = {
    name: 'width',
};
