import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../Button/Button.bundle/touch-pad';
import { Popup } from '../../Popup/Popup.bundle/touch-pad';
import { Menu } from '../../Menu/Menu.bundle/touch-pad';
import { Icon } from '../../Icon/Icon.bundle/touch-pad';
import { withOutsideClick } from '../../../hocs/withOutsideClick/withOutsideClick';
import { withTogglable } from '../../../hocs/withTogglable/withTogglable';

// base
import { Select as SelectTouchPad, cnSelect } from '../Select@touch-pad';
// _baseline
import { withBaseline } from '../_baseline/Select_baseline';
import { withWidthMax } from '../_width/Select_width_max';

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Button)
    .set('Popup', withOutsideClick(Popup))
    .set('Menu', Menu)
    .set('Icon', Icon);

export * from '../Select@touch-pad';

export const Select = compose(
    withTogglable,
    withBaseline,
    withWidthMax,
    withRegistry(registry),
)(SelectTouchPad);
