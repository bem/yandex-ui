import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_ghost.css';

export interface ILinkThemeGhostProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'ghost';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeGhostProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeGhost = withBemMod<ILinkThemeGhostProps>(cnLink(), { theme: 'ghost' }, (Link) =>
    // TODO: https://github.com/bem/bem-react/issues/381
    ({ theme, ...props }) => <Link {...props} />,
);
