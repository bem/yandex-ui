import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ButtonGroupProps, cnButtonGroup } from '../ButtonGroup';

import './ButtonGroup_pin_base.css';
import './ButtonGroup_pin_circle.css';

export interface ButtonGroupPinCircleProps {
    /**
     * Вертикальное позиционирование кнопока
     */
    pin?: 'circle';
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ButtonGroupProps} props
 */
export const withPinCircle = withBemMod<ButtonGroupPinCircleProps, ButtonGroupProps>(
    cnButtonGroup(),
    { pin: 'circle' },
    (ButtonGroup) => {
        return (props) => {
            const { pin, className, ...restProps } = props;

            return <ButtonGroup {...restProps} className={cnButtonGroup({ pin: 'base' }, [className])} pin={pin} />;
        };
    },
);
