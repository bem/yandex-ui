import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import { Progress } from '@yandex-lego/components/Progress';

export const Playground = () => {
    const value = number('value', 10);
    const timing = select('timing', ['linear', ''], 'linear') as any;
    const maxValue = number('maxValue', 100);

    return <Progress value={value} timing={timing} maxValue={maxValue} />;
};
