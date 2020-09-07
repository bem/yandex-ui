import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_normal.css';

export interface ILinkThemeNormalProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'normal';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeNormalProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeNormal = withBemMod<ILinkThemeNormalProps>(cnLink(), { theme: 'normal' }, (Link) =>
    // TODO: https://github.com/bem/bem-react/issues/381
    ({ theme, ...props }) => <Link {...props} />,
);
