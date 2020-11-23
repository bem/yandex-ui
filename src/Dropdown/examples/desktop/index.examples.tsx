import { withKnobs } from '@storybook/addon-knobs';

import { parameters, EXAMPLE_DESKTOP_TOKEN, createDecorators } from '../examples-config';

export * from './common.examples';
export * from './directions.examples';
export * from './tail.examples';
export * from './split.examples';
export * from './arrow.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
