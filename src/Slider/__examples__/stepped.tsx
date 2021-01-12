import React from 'react';
import { Slider, useSliderState } from '@yandex-lego/components/Slider/desktop/bundle';

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
