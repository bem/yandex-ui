import { withKnobs } from '@storybook/addon-knobs';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './playground.examples';
export * from './direction.examples';
export * from './glyph.examples';
export * from './size.examples';
export * from './style.examples';
export * from './type.examples';
export * from './custom.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
