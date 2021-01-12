import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Spacer } from '@yandex-lego/components/Spacer';

export const Playground = () => {
    const all = text('all', '10px');
    const vertical = text('vertical', '1rem');
    const horizontal = text('horizontal', '1em');
    const top = number('top', 10);
    const bottom = number('bottom', 10);
    const left = number('left', 10);
    const right = number('right', 10);

    return (
        <>
            <Spacer all={all}>
                Spacer изменяется через all, значение передаем как string
            </Spacer>
            <Spacer vertical={vertical} horizontal={horizontal}>
                Spacer изменяется через vertical horizontal, значение передаем как string
            </Spacer>
            <Spacer top={top} bottom={bottom} left={left} right={right}>
                Spacer изменяется через top bottom left right, значения передаем как number
            </Spacer>
        </>
    );
};
