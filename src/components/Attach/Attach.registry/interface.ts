import { ComponentType } from 'react';

import { IHolderProps } from '../Holder/Attach-Holder';
import { IControlProps } from '../Control/Attach-Control';
import { IButtonProps } from '../../Button/Button';

export interface IAttachRegistry {
    Holder: ComponentType<IHolderProps>;
    Control: ComponentType<IControlProps>;
    Button: ComponentType<IButtonProps>;
}
