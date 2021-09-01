import { IS_PRODUCTION } from '../../../lib/env';

export * from './default';

export default {
    title: 'Hermione/Menu',
    excludeStories: IS_PRODUCTION ? /Hermione/ : null,
};
