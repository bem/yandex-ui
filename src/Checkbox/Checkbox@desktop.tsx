import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { Checkbox as CheckboxCommon } from './Checkbox';
import { checkboxRegistry } from './Checkbox.registry/desktop';
import { withControl } from '../withControl/withControl@desktop';
import '../polyfills/pointerfocus';
import './Checkbox@desktop.css';

export * from './Checkbox';

export const Checkbox = compose(
    withRegistry(checkboxRegistry),
    withControl,
)(CheckboxCommon);
