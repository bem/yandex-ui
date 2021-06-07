import React from 'react';
import { Button } from '@yandex-lego/components/next/Button/desktop/bundle';

const Space = () => <span style={{ display: 'inline-block', width: 8 }} />;

export const Theme = () => (
    <>
        <Button theme="action" size="m">
            Action
        </Button>
        <Space />
        <Button theme="normal" size="m">
            Normal
        </Button>
        <Space />
        <Button theme="link" size="m">
            Link
        </Button>
        <Space />
        <Button theme="pseudo" size="m">
            Pseudo
        </Button>
        <Space />
        <Button theme="raised" size="m">
            Raised
        </Button>
        <Space />
        <Button theme="clear" size="m">
            Clear
        </Button>
        <Space />
        <Button theme="websearch" size="m">
            Search
        </Button>
    </>
);
