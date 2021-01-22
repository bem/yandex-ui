import React, { FC } from 'react';

import { cnHeader, cnHeaderLogo } from '../Header.const';
import { Link, ILinkProps } from '../../Link/Link';

import './Header-Logo.css';

export type YandexLogoProps = ILinkProps & {
    circle?: boolean;
    tld?: string;
    lang?: 'ru' | 'en';
}

/**
 * Базовый логотип Яндекс для шапки.
 * @param {YandexLogoProps} props
 *
 */
export const YandexLogo: FC<YandexLogoProps> = ({
    circle = false,
    tld = 'ru',
    lang = 'ru',
    href,
    ...rest
}) => {
    const url = href ? href : `//yandex.${tld}`;
    return <Link
        {...rest}
        className={cnHeader('Logo', { circle: Boolean(circle), lang }, [cnHeaderLogo])}
        href={url}
        tabIndex={-1}
    />;
};
