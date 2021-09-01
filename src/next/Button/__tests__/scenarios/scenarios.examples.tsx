import { IS_PRODUCTION } from '@yandex-lego/components/lib/env';

export * from './view';

export default {
    title: 'Hermione/Button@next',
    excludeStories: IS_PRODUCTION ? /Hermione/ : null,
};
