import { withKnobs } from '@storybook/addon-knobs';
import { EXAMPLE_DESKTOP_TOKEN, parameters } from '../examples-config';

export * from './default.examples';
export * from './playground.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs],
    parameters,
};
