import { withKnobs } from '@storybook/addon-knobs';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './basic.examples';
export * from './customLabelTick.examples';
export * from './customThumb.examples';
export * from './filled.examples';
export * from './marked.examples';
export * from './playground.examples';
export * from './reversed.examples';
export * from './showcase.examples';
export * from './stepped.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
