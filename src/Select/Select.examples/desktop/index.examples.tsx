import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './icon.examples';
export * from './size.examples';
export * from './theme.examples';
export * from './view.examples';
export * from './width.examples';
export * from './playground.examples';
export * from './overriden.examples';
export * from './type.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators()],
    parameters,
};
