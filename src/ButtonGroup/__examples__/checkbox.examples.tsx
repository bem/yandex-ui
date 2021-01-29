import React from 'react';

import { ButtonGroup, useButtonGroupState } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const value = [1, 2];
const mappings = ['Button 1 data', 'Button 2 data', 'Button 3 data'] as any[];

export const Checkbox = () => {
    const { selected, onClick, mapped } = useButtonGroupState({ type: 'checkbox', value, mappings });

    return (
        <>
            <ButtonGroup onClick={onClick} selected={selected}>
                <Button size="m" view="action">
                    Button 1
                </Button>
                <Button size="m" view="action">
                    Button 2
                </Button>
                <Button size="m" view="action">
                    Button 2
                </Button>
            </ButtonGroup>
            <br /> <br />
            <div>{mapped.join(', ')}</div>
        </>
    );
};
