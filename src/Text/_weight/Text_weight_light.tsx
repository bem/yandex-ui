import './Text_weight_light.css';
import { withBemMod } from '@bem-react/core';
import React from 'react';
import { cnText } from '../Text';

export interface ITextWeightLightProps {
    /**
     * Насыщенность текста
     */
    weight?: 'light';
}

/**
 * Модификатор, отвечающий за насыщенность текста.
 * @param {ITextWeightLightProps} props
 */
export const withWeightLight = withBemMod<ITextWeightLightProps>(cnText(), { weight: 'light' },
    (WrappedComponent) => (
        ({ weight, ...props }) => <WrappedComponent {...props} />
    ));
