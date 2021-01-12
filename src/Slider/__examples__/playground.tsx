import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { SliderProps, Slider, useSliderState } from '@yandex-lego/components/Slider/desktop/bundle';

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
