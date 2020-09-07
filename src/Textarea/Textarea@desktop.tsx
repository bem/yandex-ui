import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { withAutoFocus } from '../withAutoFocus/withAutoFocus';
import { withControl } from '../withControl/withControl@desktop';

import { textareaRegistry } from './Textarea.registry/desktop';
import { Textarea as TextareaCommon } from './Textarea';

export * from './Textarea';
export const Textarea = compose(
    withRegistry(textareaRegistry),
    withControl,
    withAutoFocus,
)(TextareaCommon);
