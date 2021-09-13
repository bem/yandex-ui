import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../../Button/touch-pad/bundle';
import { Icon } from '../../../Icon/touch-pad/bundle';
import { withTogglable } from '../../../withTogglable/withTogglable';

// base
import { Select as SelectTouchPad, cnSelect } from '../../Select@touch-pad';
// _baseline
import { withBaseline } from '../../_baseline/Select_baseline';
import { withWidthMax } from '../../_width/Select_width_max';

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Button)
    .set('Icon', Icon);

export * from '../../Select@touch-pad';

export const Select = compose(
    withTogglable,
    withBaseline,
    withWidthMax,
    withRegistry(registry),
)(SelectTouchPad);
