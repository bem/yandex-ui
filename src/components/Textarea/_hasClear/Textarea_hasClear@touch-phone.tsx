import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { textareaRegistry } from './Textarea_hasClear.registry/touch-phone';
import { withHasClear as withHasClearBase } from './Textarea_hasClear';

export const withHasClear = compose(
    withRegistry(textareaRegistry),
    withHasClearBase,
);
