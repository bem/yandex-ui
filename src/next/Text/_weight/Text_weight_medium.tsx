import './Text_weight_medium.css';
import { withBemMod } from '@bem-react/core';
import React from 'react';
import { cnText } from '../Text';

export interface ITextWeightMediumProps {
    /**
     * Насыщенность текста
     */
    weight?: 'medium';
}

/**
 * Модификатор, отвечающий за насыщенность текста.
 * @param {ITextWeightMediumProps} props
 */
export const withWeightMedium = withBemMod<ITextWeightMediumProps>(cnText(), { weight: 'medium' },
    (WrappedComponent) => (
        ({ weight, ...props }) => <WrappedComponent {...props} />
    ));
