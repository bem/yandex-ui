import { withRegistry } from '@bem-react/di';

import '../../polyfills/pointerfocus';
import { RadioButton as RadioButtonCommon } from './RadioButton';
import { radioButtonRegistry } from './RadioButton.registry/desktop';

export * from './RadioButton';
export const RadioButton = withRegistry(radioButtonRegistry)(RadioButtonCommon);
