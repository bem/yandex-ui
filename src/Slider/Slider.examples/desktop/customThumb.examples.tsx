import React from 'react';
import { Slider, useSliderState } from '@yandex-lego/components/Slider/desktop/bundle';

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
