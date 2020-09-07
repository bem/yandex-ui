import React from 'react';

import { Button } from '../../Button.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const View = () => (
    <>
        <Button view="default" size="m">
            Button
        </Button>{' '}
        <Button view="action" size="m">
            Button
        </Button>{' '}
        <Button view="link" size="m">
            Button
        </Button>{' '}
        <Button view="pseudo" size="m">
            Button
        </Button>{' '}
        <Button view="clear" size="m">
            Button
        </Button>{' '}
        <Button view="raised" size="m">
            Button
        </Button>
    </>
);

View.story = {
    name: 'view',
};
