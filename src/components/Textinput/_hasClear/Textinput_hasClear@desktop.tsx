import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { textinputRegistry } from './Textinput_hasClear.registry/desktop';
import { withHasClear as withHasClearBase } from './Textinput_hasClear';

export * from './Textinput_hasClear';
export const withHasClear = compose(
    withRegistry(textinputRegistry),
    withHasClearBase,
);
