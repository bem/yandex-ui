import { withRegistry } from '@bem-react/di';

import { RadioButton as RadioButtonCommon } from './RadioButton';
import { radioButtonRegistry } from './RadioButton.registry/touch-pad';

export * from './RadioButton';
export const RadioButton = withRegistry(radioButtonRegistry)(RadioButtonCommon);
