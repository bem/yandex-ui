import { createClassNameModifier } from '@bem-react/core';

import { cnButton } from '../Button';
import './Button_baseline.css';

export interface IButtonBaselineProps {
    /**
     * Выравнивание кнопки по базовой линии
     */
    baseline?: boolean;
}

/**
 * Модификатор, отвечающий за выравнивание кнопки по базовой линии.
 * @param {IButtonBaselineProps} props
 */
export const withBaseline = createClassNameModifier<IButtonBaselineProps>(cnButton(), { baseline: true });
