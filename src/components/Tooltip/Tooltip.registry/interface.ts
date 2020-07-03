import { ComponentType } from 'react';

import { IPopupProps } from '../../Popup/Popup';
import { IPopupViewDefaultProps } from '../../Popup/_view/Popup_view_default';
import { IPopupTargetAnchorProps } from '../../Popup/_target/Popup_target_anchor';

export type TooltipRegistry = {
    Popup: ComponentType<IPopupProps & IPopupViewDefaultProps & IPopupTargetAnchorProps>;
};
