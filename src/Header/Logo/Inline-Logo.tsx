import React, { FC } from 'react';

import { cnHeaderLogoInline, cnHeaderImage } from '../Header.const';
import { Link, ILinkProps } from '../../Link/Link';

import './Inline-Logo.css';

export type InlineLogoProps = ILinkProps & {
    url?: string;
    name?: string;
    src: string;
    width?: number;
    height?: number;
};

/**
 * Компонент для отрисовки произвольного логотипа.
 * @param {InlineLogoProps} props
 *
 */
export const InlineLogo: FC<InlineLogoProps> = ({
    src,
    width,
    height,
    ...rest
}) => (
    <Link {...rest} className={cnHeaderLogoInline} tabIndex={-1}>
        <img className={cnHeaderImage} src={src} width={width} height={height} />
    </Link>
);
