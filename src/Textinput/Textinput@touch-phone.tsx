import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { withAutoFocus } from '../withAutoFocus/withAutoFocus';
import { Textinput as TextinputCommon } from './Textinput';
import { textinputRegistry } from './Textinput.registry/touch-phone';

export * from './Textinput';
export const Textinput = compose(
    withRegistry(textinputRegistry),
    withAutoFocus,
)(TextinputCommon);
