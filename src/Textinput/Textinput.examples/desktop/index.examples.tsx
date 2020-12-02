import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './baseline.examples';
export * from './debounce.examples';
export * from './has-clear.examples';
export * from './pin.examples';
export * from './size.examples';
export * from './state.examples';
export * from './theme.examples';
export * from './type.examples';
export * from './view.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};
