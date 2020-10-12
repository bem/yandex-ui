import { compose, ExtractProps } from '@bem-react/core';

import { Slider as SliderBase, withViewDefault } from '../index';

export * from '../index';

export const Slider = compose(withViewDefault)(SliderBase);

Slider.displayName = 'Bundle(SliderDesktop)';

export type SliderProps = ExtractProps<typeof Slider>;
