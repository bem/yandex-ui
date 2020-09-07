import { withBemMod } from '@bem-react/core';

import { cnTextarea } from '../Textarea';
import './Textarea_view_default.css';

export interface ITextareaViewDefaultProps {
    /**
     * Внешний вид области текста.
     */
    view?: 'default';
}

/**
 * Модификатор, отвечающий за внешний вид области текста.
 * @param {ITextareaViewDefaultProps} props
 */
export const withViewDefault = withBemMod<ITextareaViewDefaultProps>(cnTextarea(), { view: 'default' });
