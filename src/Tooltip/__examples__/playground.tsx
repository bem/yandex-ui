import React, { useState, useRef } from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Tooltip } from '@yandex-lego/components/Tooltip/desktop/bundle';
import { directions } from '@yandex-lego/components/Popup';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Playground = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [visible, setVisible] = useState(false);

    const size = select('size', ['s', 'm', 'l'], 'm') as any;
    const state = select('state', ['', 'warning', 'alert', 'success'], '') as any;
    const direction = select('direction', directions, 'right');
    const hasTail = boolean('hasTail', true);
    const mainOffset = number('mainOffset', 0);
    const secondaryOffset = number('secondaryOffset', 0);
    const tailOffset = number('tailOffset', 0);

    return (
        <div style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <Button innerRef={buttonRef} view="default" size="m" onClick={() => setVisible(!visible)}>
                Target
            </Button>
            <Tooltip
                key={direction}
                hasTail={hasTail}
                mainOffset={mainOffset}
                secondaryOffset={secondaryOffset}
                tailOffset={tailOffset}
                direction={direction}
                anchor={buttonRef}
                visible={visible}
                view="default"
                size={size}
                state={state}
            >
                Добавить в избранное
            </Tooltip>
        </div>
    );
};
