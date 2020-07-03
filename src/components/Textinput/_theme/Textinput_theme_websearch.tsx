import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../Textinput';
import './Textinput_theme_websearch.css';

export interface ITextinputThemeWebsearchProps {
    /**
     * Стилевое оформление текстового поля.
     */
    theme?: 'websearch';
}

/**
 * Модификатор, отвечающий за стилевое оформление текстового поля.
 * @param {ITextinputThemeWebsearchProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeWebsearch = withBemMod<ITextinputThemeWebsearchProps>(cnTextinput(), { theme: 'websearch' });
