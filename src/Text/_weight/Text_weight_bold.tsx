import './Text_weight_bold.css';
import { withBemMod } from '@bem-react/core';
import React from 'react';
import { cnText } from '../Text';

export interface ITextWeightBoldProps {
    /**
     * Насыщенность текста
     */
    weight?: 'bold';
}

/**
 * Модификатор, отвечающий за насыщенность текста.
 * @param {ITextWeightBoldProps} props
 */
export const withWeightBold = withBemMod<ITextWeightBoldProps>(cnText(), { weight: 'bold' },
    (WrappedComponent) => (
        ({ weight, ...props }) => <WrappedComponent {...props} />
    ));
