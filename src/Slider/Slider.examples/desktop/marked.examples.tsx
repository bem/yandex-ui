import React from 'react';
import { Slider, useSliderState } from '@yandex-lego/components/Slider/desktop/bundle';

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
