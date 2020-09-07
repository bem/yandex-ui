import { Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

import { Popup as PopupTouchPhone } from '../../Popup/Popup@touch-phone';
import { withViewDefault } from '../../Popup/_view/Popup_view_default';
import { withTargetAnchor } from '../../Popup/_target/Popup_target_anchor';
import { withNonvisual } from '../../Popup/_nonvisual/Popup_nonvisual';
import { cnMessageBox } from '../MessageBox';

const Popup = compose(
    withViewDefault,
    withTargetAnchor,
    withNonvisual,
)(PopupTouchPhone);

export const registry = new Registry({ id: cnMessageBox() });

registry.set('Popup', Popup);
