import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ButtonGroupProps, cnButtonGroup } from '../ButtonGroup';

import './ButtonGroup_pin_base.css';
import './ButtonGroup_pin_round.css';

export interface ButtonGroupPinRoundProps {
    /**
     * Вертикальное позиционирование кнопока
     */
    pin?: 'round';
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ButtonGroupProps} props
 */
export const withPinRound = withBemMod<ButtonGroupPinRoundProps, ButtonGroupProps>(
    cnButtonGroup(),
    { pin: 'round' },
    (ButtonGroup) => {
        return (props) => {
            const { pin, className, ...restProps } = props;

            return <ButtonGroup {...restProps} className={cnButtonGroup({ pin: 'base' }, [className])} pin={pin} />;
        };
    },
);
