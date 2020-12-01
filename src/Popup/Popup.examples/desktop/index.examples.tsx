import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './direction.examples';
export * from './nonvisual.examples';
export * from './position.examples';
export * from './scrollable.examples';
export * from './target.examples';
export * from './theme.examples';
export * from './view.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};
