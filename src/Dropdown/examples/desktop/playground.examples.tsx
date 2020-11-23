import React from 'react';
import { withKnobs, select, optionsKnob, boolean } from '@storybook/addon-knobs';

import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Dropdown, TriggerType } from '@yandex-lego/components/Dropdown/desktop';
import { SampleMenu } from '../SampleMenu';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
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
        <div className={cnTheme(presets[preset])}>
            <Dropdown trigger={triggerType} view="default" content={<SampleMenu />} hasTail={hasTail}>
                <Button view="default" size="s">
                    Dropdown
                </Button>
            </Dropdown>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
