import React from 'react';

import { Button } from '../../Button.bundle/desktop';

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
