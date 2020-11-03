import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

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
