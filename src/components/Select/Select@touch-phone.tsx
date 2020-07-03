import { withRegistry } from '@bem-react/di';
import { Wrapper, compose } from '@bem-react/core';

import { ISelectProps, Select as SelectCommon } from './Select';
import { selectRegistry } from './Select.registry/touch-phone';
import { withNativeControl } from './Select.hocs/withNativeControl';
import './Control/Select-Control.css';

export * from './Select';

export const Select = compose(
    withRegistry(selectRegistry),
    withNativeControl as Wrapper<ISelectProps>,
)(SelectCommon);
