import { Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

import { Popup as PopupDesktop } from '../../Popup/Popup@desktop';
import { withViewDefault } from '../../Popup/_view/Popup_view_default';
import { withTargetAnchor } from '../../Popup/_target/Popup_target_anchor';
import { withNonvisual } from '../../Popup/_nonvisual/Popup_nonvisual';
import { cnMessageBox } from '../MessageBox';
import { withOutsideClick } from '../../../hocs/withOutsideClick/withOutsideClick';
import { withZIndex } from '../../../hocs/withZIndex/withZIndex';

const Popup = compose(
    withViewDefault,
    withTargetAnchor,
    withNonvisual,
    withOutsideClick,
    withZIndex,
)(PopupDesktop);

export const registry = new Registry({ id: cnMessageBox() });

registry.set('Popup', Popup);
