import { withRegistry } from '@bem-react/di';

import { Checkbox as CheckboxCommon } from './Checkbox';
import { checkboxRegistry } from './Checkbox.registry/touch-pad';

export * from './Checkbox';

export const Checkbox = withRegistry(checkboxRegistry)(CheckboxCommon);
