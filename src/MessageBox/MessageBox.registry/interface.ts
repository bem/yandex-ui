import { ComponentType } from 'react';

import { IPopupProps } from '../../Popup/Popup';
import { IPopupViewDefaultProps } from '../../Popup/_view/Popup_view_default';
import { IPopupTargetAnchorProps } from '../../Popup/_target/Popup_target_anchor';
import { IPopupNonvisualProps } from '../../Popup/_nonvisual/Popup_nonvisual';

export type MessageBoxRegistry = {
    Popup: ComponentType<IPopupProps & IPopupViewDefaultProps & IPopupTargetAnchorProps & IPopupNonvisualProps>;
};
