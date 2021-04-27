import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';

export const Width = () => (
    <>
        <Button view="raised" width="max" size="s">
            <Icon glyph="type-arrow" direction="left" />
            <span style={{ padding: '0 4px' }}>Max Width</span>
            <Icon glyph="type-arrow" direction="right" />
        </Button>
        <br />
        <br />
        <Button
            view="raised"
            width="max"
            size="s"
            iconLeft={(className) => <Icon className={className} glyph="type-arrow" direction="left" />}
            iconRight={(className) => <Icon className={className} glyph="type-arrow" direction="right" />}
        >
            Max Width
        </Button>
        <br />
        <br />
        <Button
            view="raised"
            width="auto"
            size="s"
            iconLeft={(className) => <Icon className={className} glyph="type-arrow" direction="left" />}
            iconRight={(className) => <Icon className={className} glyph="type-arrow" direction="right" />}
        >
            Auto Width
        </Button>
    </>
);
