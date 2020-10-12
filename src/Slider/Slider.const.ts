import { cn } from '@bem-react/classname';

export const cnSlider = cn('Slider');

// Кэшируем вызов cn, т.к. для этих элементов нет модификаторов.
export const cnSliderTrack = cnSlider('Track');
export const cnSliderRange = cnSlider('Range');
export const cnSliderContainer = cnSlider('Container');
