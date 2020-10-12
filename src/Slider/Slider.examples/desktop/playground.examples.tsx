import React from 'react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { SliderProps, Slider, useSliderState } from '../../desktop/bundle';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const getKnobProps = (): Partial<SliderProps> => ({
    disabled: boolean('disabled', false),
    filled: boolean('filled', true),
    max: number('max', 10),
    min: number('min', 0),
    reverse: boolean('reverse', false),
    showTicks: boolean('showTicks', true),
    showTickValues: boolean('showTickValues', true),
    step: number('step', 1),
});

export const Playground = () => {
    const state1 = useSliderState({ value: [2] });
    const state2 = useSliderState({ value: [2, 5] });
    const knobProps = getKnobProps();

    return (
        <>
            <Slider {...state1} {...knobProps} view="default" />
            <Slider {...state2} {...knobProps} view="default" />
        </>
    );
};

Playground.story = {
    name: 'playground',
};
