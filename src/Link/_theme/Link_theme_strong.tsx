import React from 'react';
import { withBemMod } from '@bem-react/core';

import { cnLink } from '../Link';
import './Link_theme_strong.css';

export interface ILinkThemeStrongProps {
    /**
     * Стилевое оформление ссылки
     */
    theme?: 'strong';
}

/**
 * Модификатор, отвечающий за стилевое оформление ссылки.
 * @param {ILinkThemeStrongProps} props
 *
 * @deprecated Рекомендуется использовать withViewDefault
 */
export const withThemeStrong = withBemMod<ILinkThemeStrongProps>(cnLink(), { theme: 'strong' }, (Link) =>
    // TODO: https://github.com/bem/bem-react/issues/381
    ({ theme, ...props }) => <Link {...props} />,
);
