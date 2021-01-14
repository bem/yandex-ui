import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ButtonGroupProps, cnButtonGroup } from '../ButtonGroup';

import './ButtonGroup_gap_m.css';

export interface ButtonGroupGapMProps {
    /**
     * Вертикальное позиционирование кнопока
     */
    gap?: 'm';
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ButtonGroupProps} props
 */
export const withGapM = withBemMod<ButtonGroupGapMProps, ButtonGroupProps>(
    cnButtonGroup(),
    { gap: 'm' },
    (ButtonGroup) => {
        return (props) => {
            const { gap, ...restProps } = props;

            return <ButtonGroup {...restProps} gap={gap} />;
        };
    },
);
