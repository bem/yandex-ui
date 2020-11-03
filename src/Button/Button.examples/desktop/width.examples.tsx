import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

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
