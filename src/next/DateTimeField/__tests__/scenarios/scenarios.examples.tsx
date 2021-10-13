import { IS_PRODUCTION } from '@yandex-lego/components/lib/env';

export * from './single';

export default {
    title: 'Hermione/DateTimeField@next',
    excludeStories: IS_PRODUCTION ? /Hermione/ : null,
};
