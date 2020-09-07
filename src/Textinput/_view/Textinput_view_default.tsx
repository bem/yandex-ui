import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_view_default.css';

export interface ITextinputViewDefaultProps {
    /**
     * Внешний вид текстового поля.
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид текстового поля.
 * @param {ITextinputViewDefaultProps} props
 */
export const withViewDefault = withBemMod<ITextinputViewDefaultProps>(cnTextinput(), { view: 'default' });
