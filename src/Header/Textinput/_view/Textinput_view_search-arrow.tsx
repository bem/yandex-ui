import { withBemMod } from '@bem-react/core';

import { cnTextinput } from '../../../Textinput';
import './Textinput_view_search-arrow.css';

export interface TextinputViewSearchArrowProps {
    /**
     * Стилевое оформление текстового поля.
     */
    view?: 'search-arrow';
}

/**
 * Модификатор, отвечающий за стилевое оформление текстового поля.
 * @param {TextinputViewSearchArrowProps} props
 *
 */
export const withViewSearchArrow = withBemMod<TextinputViewSearchArrowProps>(cnTextinput(), { view: 'search-arrow' });
