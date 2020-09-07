import { cloneElement, ReactElement } from 'react';

import { IIconProps } from '../../Icon/Icon';
import { cnTextinput } from '../Textinput';
import './Textinput-Icon.css';
import './_side/Textinput-Icon_side_left.css';
import './_side/Textinput-Icon_side_right.css';

export interface ITextinputIconProps {
    /**
     * Компонент иконки для отображения.
     */
    component: ReactElement<IIconProps>;

    /**
     * Расположение иконки.
     */
    side?: 'left' | 'right';
}

export const TextinputIcon = ({ component, side, ...props }: ITextinputIconProps) =>
    cloneElement(component, {
        ...props,
        className: cnTextinput('Icon', { side }, [component.props.className]),
    });
