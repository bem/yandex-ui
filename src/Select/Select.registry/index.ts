import { ComponentType, CSSProperties, FocusEventHandler } from 'react';

import { Omit } from '../../typings/utility-types';
import { IButtonProps, ContainerElement } from '../../Button/Button';
import { IButtonWidthMaxProps } from '../../Button/_width/Button_width_max';
import { IIconProps } from '../../Icon/Icon';
import { IPopupProps } from '../../Popup/Popup';
import { IPopupTargetAnchorProps } from '../../Popup/_target/Popup_target_anchor';
import { IWithOutsideClickProps } from '../../withOutsideClick/withOutsideClick';
import { IMenuProps } from '../../Menu/Menu';
import { IMenuWidthMaxProps } from '../../Menu/_width/Menu_width_max';

interface ITriggerEnhancedProps extends IButtonProps, IButtonWidthMaxProps {
    size?: string;
    theme?: string;
    view?: string;
    role?: string;
    style?: CSSProperties;
    onBlur?: FocusEventHandler<ContainerElement>;
}

export interface IIconEnhancedProps extends IIconProps {
    type?: string;
    glyph?: string;
}

interface IPopupEnhancedProps extends IPopupProps, IPopupTargetAnchorProps, IWithOutsideClickProps {
    theme?: string;
    view?: string;
}

interface IMenuEnhancedProps extends Omit<IMenuProps, 'size' | 'width'>, IMenuWidthMaxProps {
    size?: string;
    theme?: string;
    view?: string;
}

export interface ISelectRegistry {
    Trigger: ComponentType<ITriggerEnhancedProps>;
    Icon: ComponentType<IIconEnhancedProps>;
    Popup: ComponentType<IPopupEnhancedProps>;
    Menu: ComponentType<IMenuEnhancedProps>;
}
