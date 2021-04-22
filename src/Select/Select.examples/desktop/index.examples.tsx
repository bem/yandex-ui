import { withKnobs } from '@storybook/addon-knobs';
import { IS_PRODUCTION } from '@yandex-lego/components/lib/env';

import { EXAMPLE_DESKTOP_TOKEN, parameters } from '../examples-config';

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
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs],
    parameters,
    includeStories: !IS_PRODUCTION ? /^(?!.+Hermione).+/ : null,
};
