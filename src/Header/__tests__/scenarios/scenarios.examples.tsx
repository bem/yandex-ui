import { IS_PRODUCTION } from '../../../lib/env';

export * from './default';

export default {
    title: 'Hermione|Header',
    includeStories: IS_PRODUCTION ? null : /^(?!.+Hermione).+/,
};
