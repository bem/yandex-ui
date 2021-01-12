import React from 'react';
import { optionsKnob, boolean } from '@storybook/addon-knobs';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Dropdown, TriggerType } from '@yandex-lego/components/Dropdown/desktop';

import { SampleMenu } from './SampleMenu';

export const Playground = () => {
    const triggerType = optionsKnob<TriggerType>(
        'trigger-type',
        ['hover', 'click', 'focus'].reduce<Record<string, TriggerType>>((acc, cur) => {
            acc[cur] = cur as TriggerType;
            return acc;
        }, {}),
        ['hover'],
        { display: 'multi-select' },
    );
    const hasTail = boolean('has-tail', true);

    return (
        <Dropdown trigger={triggerType} view="default" content={<SampleMenu />} hasTail={hasTail}>
            <Button view="default" size="s">
                Dropdown
            </Button>
        </Dropdown>
    );
};
