import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './auto-resize.examples';
export * from './debounce.examples';
export * from './has-clear.examples';
export * from './size.examples';
export * from './state.examples';
export * from './theme.examples';
export * from './view.examples';
export * from './playground.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};
