import React from 'react';

import { Button } from '../../Button.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Theme = () => (
    <>
        <Button theme="normal" size="m">
            Button
        </Button>{' '}
        <Button theme="action" size="m">
            Button
        </Button>{' '}
        <Button theme="clear" size="m">
            Button
        </Button>{' '}
        <Button theme="link" size="m">
            Button
        </Button>{' '}
        <Button theme="pseudo" size="m">
            Button
        </Button>{' '}
        <Button theme="raised" size="m">
            Button
        </Button>{' '}
        <Button theme="websearch" size="m">
            Button
        </Button>
    </>
);

Theme.story = {
    name: 'theme',
};
