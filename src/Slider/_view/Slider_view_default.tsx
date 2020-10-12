import { withBemMod } from '@bem-react/core';

import { cnSlider } from '../Slider.const';
import './Slider_view_default.css';

export type SliderViewDefaultProps = {
    /**
     * Внешний вид слайдера
     */
    view?: 'default';
};

/**
 * Модификатор, отвечающий за внешний вид слайдера.
 *
 * @param {SliderViewDefaultProps} props
 */
export const withViewDefault = withBemMod<SliderViewDefaultProps>(cnSlider(), { view: 'default' });
