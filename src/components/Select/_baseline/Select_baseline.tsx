import { withBemMod } from '@bem-react/core';

import { cnSelect } from '../Select';
import './Select_baseline.css';

export interface ISelectBaselineProps {
    /**
     * Выравнивание селекта по базовой линии.
     */
    baseline?: boolean;
}

/**
 * Модификатор, отвечающий за выравнивание селекта по базовой линии.
 * @param {ISelectBaselineProps} props
 */
export const withBaseline = withBemMod<ISelectBaselineProps>(cnSelect(), { baseline: true });
