import { IS_PRODUCTION } from '@yandex-lego/components/lib/env';

export * from './simple-text';
export * from './color-text';
export * from './typography-text';

export default {
    title: 'Hermione/Text@next',
    excludeStories: IS_PRODUCTION ? /Hermione/ : null,
};
