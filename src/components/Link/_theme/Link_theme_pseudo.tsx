import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_pseudo.css';

export interface ILinkThemePseudoProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'pseudo';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemePseudoProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemePseudo = withBemMod<ILinkThemePseudoProps>(cnLink(), { theme: 'pseudo' }, (Link) =>
    // TODO: https://github.com/bem/bem-react/issues/381
    ({ theme, ...props }) => <Link {...props} />,
);
