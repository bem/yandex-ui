import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_baseline.css';

export interface ITextinputBaselineProps {
    /**
     * Выравнивание текстового поля по базовой линии.
     */
    baseline?: boolean;
}

/**
 * Модификатор, отвечающий за выравнивание текстового поля по базовой линии.
 * @param {ITextinputBaselineProps} props
 */
export const withBaseline = withBemMod<ITextinputBaselineProps>(cnTextinput(), { baseline: true });
