import React, { FC, CSSProperties, ReactElement, MouseEventHandler } from 'react';
import { cn } from '@bem-react/classname';

import './Icon.css';

export interface IIconProps {
    /**
     * Направление для иконки-стрелки
     */
    direction?: 'left' | 'top' | 'right' | 'bottom';

    /**
     * Размер иконки
     */
    size?: 'ns' | 'xs' | 's' | 'm' | 'n' | 'l' | 'head';

    /**
     * CSS-стили иконки
     *
     * @default {}
     */
    style?: CSSProperties;

    /**
     * Ссылка на изображение или содержимое картинки в кодировке base64
     */
    url?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Контент иконки
     */
    children?: ReactElement;

    /**
     * Всплывающая подсказка
     */
    title?: string;

    /**
     * Обработчик, который вызывается при клике на иконку
     */
    onClick?: MouseEventHandler<HTMLSpanElement>;
}

export const cnIcon = cn('Icon');

/**
 * Компонент для вставки иконки.
 * @param {IIconProps} props
 */
export const Icon: FC<IIconProps> = ({
    direction,
    size,
    url,
    style = {},
    children,
    title,
    onClick,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    type: _type,
    // @ts-ignore
    glyph: _glyph,
    ...props
}) => {
    const className = cnIcon({ direction, size }, [props.className]);

    if (url !== undefined) {
        style.backgroundImage = `url('${url}')`;
    }

    return (
        <span {...props} aria-hidden className={className} style={style} title={title} onClick={onClick}>
            {children}
        </span>
    );
};

Icon.displayName = cnIcon();
