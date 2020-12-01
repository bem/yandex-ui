import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './apps.examples';
export * from './buttons.examples';
export * from './complex.examples';
export * from './corner.examples';
export * from './layout.examples';
export * from './sizes.examples';
export * from './tooltip.examples';
export * from './view.examples';
export * from './withPopup.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
