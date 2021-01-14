import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ButtonGroupProps, cnButtonGroup } from '../ButtonGroup';

import './ButtonGroup_gap_s.css';

export interface ButtonGroupGapSProps {
    /**
     * Вертикальное позиционирование кнопока
     */
    gap?: 's';
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ButtonGroupProps} props
 */
export const withGapS = withBemMod<ButtonGroupGapSProps, ButtonGroupProps>(
    cnButtonGroup(),
    { gap: 's' },
    (ButtonGroup) => {
        return (props) => {
            const { gap, ...restProps } = props;

            return <ButtonGroup {...restProps} gap={gap} />;
        };
    },
);
