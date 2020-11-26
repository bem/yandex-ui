import React from 'react';
import { Slider, useSliderState } from '@yandex-lego/components/Slider/desktop/bundle';

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
