import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';

export const Playground = () => {
    const gap = select('gapSize', ['s', 'm', 'l', 'xl', ''], '') as any;
    const pin = select('pin', ['round', 'circle', ''], '') as any;
    const vertical = boolean('vertical', false) as any;
    const disabled = boolean('disabled', false) as any;
    const buttonView = select(
        'button view',
        ['default', 'action', 'pseudo', 'link', 'clear', 'raised', ''],
        'default',
    ) as any;
    const buttonSize = select('button size', ['s', 'm', 'l'], 'm') as any;

    return (
        <ButtonGroup gap={gap} pin={pin} vertical={vertical} disabled={disabled}>
            <Button view={buttonView} size={buttonSize}>
                {' '}
                Button 1
            </Button>
            <Button view={buttonView} size={buttonSize}>
                {' '}
                Button 2
            </Button>
            <Button view={buttonView} size={buttonSize}>
                {' '}
                Button 3
            </Button>
        </ButtonGroup>
    );
};
