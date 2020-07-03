import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_outer.css';

export interface ILinkThemeOuterProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'outer';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeOuterProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeOuter = withBemMod<ILinkThemeOuterProps>(cnLink(), { theme: 'outer' }, (Link) =>
    // TODO: https://github.com/bem/bem-react/issues/381
    ({ theme, ...props }) => <Link {...props} />,
);
