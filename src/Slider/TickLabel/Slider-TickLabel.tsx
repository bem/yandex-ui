import React, { FC } from 'react';

import { cnSlider } from '../Slider.const';
import './Slider-TickLabel.css';

export type SliderTickLabelProps = {
    /**
     * Порядковый номер компонента
     */
    index: number;

    /**
     * Флаг, обозначающий, что компонент является первым в списке
     */
    isFirst: boolean;

    /**
     * Флаг, обозначающий, что компонент является последним в списке
     */
    isLast: boolean;

    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;
};

export const SliderTickLabel: FC<SliderTickLabelProps> = ({ className, index, isFirst, isLast, ...props }) => (
    <span {...props} className={cnSlider('TickLabel', [className])} />
);
