import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_black.css';

export interface ILinkThemeBlackProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'black';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeBlackProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeBlack = withBemMod<ILinkThemeBlackProps>(cnLink(), { theme: 'black' }, (Link) =>
    // TODO: https://github.com/bem/bem-react/issues/381
    ({ theme, ...props }) => <Link {...props} />,
);
