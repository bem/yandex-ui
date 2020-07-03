import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { withAutoFocus } from '../../hocs/withAutoFocus/withAutoFocus';
import { textareaRegistry } from './Textarea.registry/touch-phone';
import { Textarea as TextareaCommon } from './Textarea';

export * from './Textarea';
export const Textarea = compose(
    withRegistry(textareaRegistry),
    withAutoFocus,
)(TextareaCommon);
