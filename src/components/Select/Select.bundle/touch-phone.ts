import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

// Registry dependencies
import { Button } from '../../Button/Button.bundle/touch-phone';
import { Popup } from '../../Popup/Popup.bundle/touch-phone';
import { Menu } from '../../Menu/Menu.bundle/touch-phone';
import { Icon } from '../../Icon/Icon.bundle/touch-phone';
import { withOutsideClick } from '../../../hocs/withOutsideClick/withOutsideClick';
import { withTogglable } from '../../../hocs/withTogglable/withTogglable';

// base
import { Select as SelectTouchPhone, cnSelect } from '../Select@touch-phone';
// _baseline
import { withBaseline } from '../_baseline/Select_baseline';
import { withWidthMax } from '../_width/Select_width_max';

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Button)
    .set('Popup', withOutsideClick(Popup))
    .set('Menu', Menu)
    .set('Icon', Icon);

export * from '../Select@touch-phone';

export const Select = compose(
    withTogglable,
    withBaseline,
    withWidthMax,
    withRegistry(registry),
)(SelectTouchPhone);
