import React, { FC } from 'react';

import { cnHeader, cnHeaderImage } from '../Header.const';
import { Link, ILinkProps } from '../../Link/Link';
import { BaseLogoaasProps, getLogoaasUrl } from './Logoaas.utils';

import './Logoaas.css';

export type LogoaasProps = ILinkProps & BaseLogoaasProps;

/**
 * Компонент для отрисовки логотипа на основе logoaas
 *
 * @default "Яндекс"
 * @see https://github.yandex-team.ru/soft/logoaas
 * @param {LogoaasProps} props
 */
export const Logoaas: FC<LogoaasProps> = ({
    size = 32,
    color = '000',
    first = 'f00',
    tld = 'ru',
    circle = false,
    href,
    name = 'Яндекс',
    className,
    single,
    rebranding,
    ...rest
}) => {
    const baseUrl = href ? href : `//yandex.${tld}`;
    const baseLogo = getLogoaasUrl({ name, size, color, first, circle, single, rebranding });
    return (
        <Link {...rest} className={cnHeader('Logoaas', { rebranding }, [className])} href={baseUrl} tabIndex={-1}>
            <img className={cnHeaderImage} src={baseLogo} />
        </Link>
    );
};
