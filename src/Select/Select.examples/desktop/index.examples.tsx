import { IS_PRODUCTION } from '@yandex-lego/components/lib/env';

export * from '../ComboBox/index.examples';
export * from './icon.examples';
export * from './size.examples';
export * from './theme.examples';
export * from './view.examples';
export * from './width.examples';
export * from './playground.examples';
export * from './overriden.examples';
export * from './type.examples';
export * from './long.examples';

export * from '../../Select.tests/scenarios/long';

export default {
    title: 'Controls/Select/desktop',
    parameters: {
        docs: {
            readme: require('../../readme.md'),
        },
    },
    includeStories: !IS_PRODUCTION ? /^(?!.+Hermione).+/ : null,
};
