import { IS_PRODUCTION } from '@yandex-lego/components/lib/env';

export * from './view';

export default {
    title: 'Hermione|Button',
    includeStories: IS_PRODUCTION ? null : /^(?!.+Hermione).+/,
};
