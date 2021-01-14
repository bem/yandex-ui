import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ButtonGroupProps, cnButtonGroup } from '../ButtonGroup';

import './ButtonGroup_gap_xl.css';

export interface ButtonGroupGapXLProps {
    /**
     * Вертикальное позиционирование кнопока
     */
    gap?: 'xl';
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ButtonGroupProps} props
 */
export const withGapXL = withBemMod<ButtonGroupGapXLProps, ButtonGroupProps>(
    cnButtonGroup(),
    { gap: 'xl' },
    (ButtonGroup) => {
        return (props) => {
            const { gap, ...restProps } = props;

            return <ButtonGroup {...restProps} gap={gap} />;
        };
    },
);
