import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ButtonGroupProps, cnButtonGroup } from '../ButtonGroup';

import './ButtonGroup_gap_l.css';

export interface ButtonGroupGapLProps {
    /**
     * Вертикальное позиционирование кнопока
     */
    gap?: 'l';
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ButtonGroupProps} props
 */
export const withGapL = withBemMod<ButtonGroupGapLProps, ButtonGroupProps>(
    cnButtonGroup(),
    { gap: 'l' },
    (ButtonGroup) => {
        return (props) => {
            const { gap, ...restProps } = props;

            return <ButtonGroup {...restProps} gap={gap} />;
        };
    },
);
