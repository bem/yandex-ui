import { EXAMPLE_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './complex-modal.examples';
export * from './complex-popup.examples';

export default {
    title: EXAMPLE_TOKEN,
    decorators: [createDecorators()],
    parameters,
};
