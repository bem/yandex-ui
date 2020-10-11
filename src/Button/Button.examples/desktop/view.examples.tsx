import React from 'react';

import { Button } from '../../Button.bundle/desktop';

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
