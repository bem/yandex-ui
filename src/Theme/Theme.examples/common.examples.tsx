import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from './examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Docs = () => null;

Docs.story = {
    name: 'Темизация',
};
