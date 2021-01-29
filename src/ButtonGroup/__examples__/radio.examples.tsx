import React from 'react';

import { ButtonGroup, useButtonGroupState } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';

const value = [1];
const mappings = ['Button 1 data', 'Button 2 data', 'Button 3 data'] as any[];

export const Radio = () => {
    const { selected, onClick, mapped } = useButtonGroupState({ type: 'radio', value, mappings });

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
                    Button 3
                </Button>
            </ButtonGroup>
            <br /> <br />
            <div>{mapped[0]}</div>
        </>
    );
};
