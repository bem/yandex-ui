import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const Space = () => <span style={{ display: 'inline-block', width: 8 }} />;

export const View = () => (
    <>
        <Button view="action" size="s">
            Action
        </Button>
        <Space />
        <Button view="default" size="s">
            Default
        </Button>
        <Space />
        <Button view="pseudo" size="s">
            Pseudo
        </Button>
        <Space />
        <Button view="link" size="s">
            Link
        </Button>
        <Space />
        <Button view="clear" size="s">
            Clear
        </Button>
        <Space />
        <Button view="raised" size="s">
            Raised
        </Button>
    </>
);
