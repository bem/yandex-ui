import React, { FC, RefObject, CSSProperties } from 'react';
import { cn } from '@bem-react/classname';

import './Badge.css';

export interface BadgeProps {
    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Пользовательские стили
     */
    style?: CSSProperties;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Содержимое, отображаемое внутри значка
     */
    content?: string | number;

    /**
     * Цвет заливки блока
     */
    color?: string;

    /**
     * Цвет текста блока
     */
    textColor?: string;

    /**
     * Цвет обводки блока
     */
    outlineColor?: string;
}

export const cnBadge = cn('Badge');

/**
 * Индикатор-счётчик новой информации
 * @param {BadgeProps} props
 */
export const Badge: FC<BadgeProps> = ({
    color,
    textColor,
    outlineColor,
    content,
    children,
    innerRef,
    style,
    className,
    ...props
}) => (
    <div ref={innerRef} {...props} className={cnBadge(null, [className])}>
        {children}
        <div
            className={cnBadge('Dot', { withChildren: Boolean(children), withContent: Boolean(content) })}
            style={{ backgroundColor: color, color: textColor, borderColor: outlineColor, ...style }}
        >
            {content}
        </div>
    </div>
);

Badge.displayName = cnBadge();
