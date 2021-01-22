import React, { FC } from 'react';

import { cnHeader, cnHeaderImage } from '../Header.const';
import { Link, ILinkProps } from '../../Link/Link';

import './Logoaas.css';

export type LogoaasProps = ILinkProps & {
    circle?: boolean;
    /**
     * Размер в пунктах SketchApp
     */
    size?: number;

    /**
     * Цвет текста.
     */
    color?: string;
    /**
     * Цвет первой буквы
     * По умолчанию цвет текста - черный.
     * А цвет первой буквы слова "Яндекс" или "Yandex" - красный.
     * Можно указать другой цвет первой буквы.
     *
     * Замена цвета первой буквы работает ТОЛЬКО, если не указан основной цвет текста, либо цвет черный.
     */
    first?: string;

    /**
     * Домен для ссылки на Яндекс
     * Логотип будет вести на yandex.tld, если не передан href.
     */
    tld?: string;

    /**
     * Текст на Логотипе.
     * @default Яндекс
     */
    name?: string;
}

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
    ...rest
}) => {
    const baseUrl = href ? href : `//yandex.${tld}`;
    const baseLogo = `//yastatic.net/q/logoaas/${name}.svg?size=${size}&color=${color}&first=${first}&circle=${Number(circle)}`;
    return (
        <Link {...rest} className={cnHeader('Logoaas', [className])} href={baseUrl} tabIndex={-1}>
            <img className={cnHeaderImage} src={baseLogo} />
        </Link>
    );
};
