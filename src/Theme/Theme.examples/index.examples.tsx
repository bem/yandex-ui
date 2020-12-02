import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from './examples-config';

export * from './docs.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};
