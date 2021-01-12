import React from 'react';
import { Slider, useSliderState } from '@yandex-lego/components/Slider/desktop/bundle';

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
