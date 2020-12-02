import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './playground.examples';
export * from './direction.examples';
export * from './size.examples';
export * from './state.examples';
export * from './stateful.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
