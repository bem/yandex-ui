import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { withAutoFocus } from '../../hocs/withAutoFocus/withAutoFocus';
import { withControl } from '../../hocs/withControl/withControl@desktop';

import { textareaRegistry } from './Textarea.registry/desktop';
import { Textarea as TextareaCommon } from './Textarea';

export * from './Textarea';
export const Textarea = compose(
    withRegistry(textareaRegistry),
    withControl,
    withAutoFocus,
)(TextareaCommon);
