import './Text_weight_regular.css';
import { withBemMod } from '@bem-react/core';
import React from 'react';
import { cnText } from '../Text';

export interface ITextWeightRegularProps {
    /**
     * Насыщенность текста
     */
    weight?: 'regular';
}

/**
 * Модификатор, отвечающий за насыщенность текста.
 * @param {ITextWeightRegularProps} props
 */
export const withWeightRegular = withBemMod<ITextWeightRegularProps>(cnText(), { weight: 'regular' },
    (WrappedComponent) => (
        ({ weight, ...props }) => <WrappedComponent {...props} />
    ));
