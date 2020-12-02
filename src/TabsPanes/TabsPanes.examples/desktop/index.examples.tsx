import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './withRadiobox.examples';
export * from './withTabsMenu.examples';
export * from './playground.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
