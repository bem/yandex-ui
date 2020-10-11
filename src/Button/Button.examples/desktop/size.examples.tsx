import React from 'react';

import { Button } from '../../Button.bundle/desktop';

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
