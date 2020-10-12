import React from 'react';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { Slider, useSliderState } from '../../desktop/bundle';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Basic = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider view="default" {...state1} />
            <Slider view="default" {...state2} />
        </>
    );
};

Basic.story = {
    name: 'simple',
};

export const Filled = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider filled view="default" {...state1} />
            <Slider filled view="default" {...state2} />
        </>
    );
};

Filled.story = {
    name: 'filled',
};

export const Reversed = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider reverse filled view="default" {...state1} />
            <Slider reverse filled view="default" {...state2} />
        </>
    );
};

Reversed.story = {
    name: 'reversed',
};

export const Stepped = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider filled step={25} view="default" {...state1} />
            <Slider filled step={25} view="default" {...state2} />
        </>
    );
};

Stepped.story = {
    name: 'stepped',
};

export const Marked = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider filled step={20} showTicks showTickValues view="default" {...state1} />
            <Slider filled showTicks showTickValues step={20} view="default" {...state2} />
        </>
    );
};

Marked.story = {
    name: 'marked',
};

export const CustomThumb = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider
                filled
                step={20}
                view="default"
                {...state1}
                renderThumb={(props, Thumb) => (
                    <Thumb {...props} style={{ width: 40, height: 20, borderRadius: 4 }}>
                        {props.value}
                    </Thumb>
                )}
            />
            <Slider
                filled
                step={20}
                view="default"
                {...state2}
                renderThumb={(props, Thumb) => (
                    <Thumb {...props} style={{ width: 40, height: 20, borderRadius: 4 }}>
                        {props.value}
                    </Thumb>
                )}
            />
        </>
    );
};

CustomThumb.story = {
    name: 'custom-thumb',
};

export const CustomLabelTick = () => {
    const state1 = useSliderState({ value: [20] });
    const state2 = useSliderState({ value: [20, 50] });

    return (
        <>
            <Slider
                filled
                showTickValues
                step={10}
                view="default"
                {...state1}
                renderTickLabel={(props, LabelTick) => (props.index % 2 === 0 ? <LabelTick {...props} /> : null)}
            />
            <Slider
                filled
                showTickValues
                step={10}
                view="default"
                {...state2}
                renderTickLabel={(props, LabelTick) => (props.index % 2 === 0 ? <LabelTick {...props} /> : null)}
            />
        </>
    );
};

CustomLabelTick.story = {
    name: 'custom-label-tick',
};
