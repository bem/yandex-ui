import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import './ListTile.css';

export type AlignItemsValue = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type ListTileWrapperSpace =
    | '3xs'
    | '2xs'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';

export interface ListTileProps {
    /**
     *  Основной контент компонента
     */
    children: ReactNode;

    /**
     * Содержимое перед `children`
     */
    leading?: ReactNode;

    /**
     * Содержимое после `children`
     */
    trailing?: ReactNode;

    /**
     * Дополнительные css-классы
     */
    className?: string;

    /**
     * Определяет ширину по содержимому
     */
    inline?: boolean;

    /**
     * Выравнивание элементов вдоль основной оси
     */
    alignItems?: AlignItemsValue;

    /**
     * Отступ слева от основного контента
     */
    leftSpace?: ListTileWrapperSpace;

    /**
     * Отступ справа от основного контента
     */
    rightSpace?: ListTileWrapperSpace;

    /**
     * Обработчик клика по ListTile
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const cnListTile = cn('ListTile');
const cnListTileLeading = cnListTile('Leading');
const cnListTileTrailing = cnListTile('Trailing');

/**
 * Блок примитив для удобного позиционирования контента, обрамлённый иконками или другими блоками например checkbox
 *
 * @param { ListTileProps }  props
 */
export const ListTile: FC<ListTileProps> = ({
    children,
    leading,
    trailing,
    className,
    inline,
    alignItems,
    leftSpace,
    rightSpace,
    onClick,
}) => (
    <div
        onClick={onClick}
        className={cnListTile(
            {
                inline,
                alignItems,
            },
            [className],
        )}
    >
        {leading && <div className={cnListTileLeading}>{leading}</div>}
        <div
            className={cnListTile('Wrapper', {
                leftSpace,
                rightSpace,
            })}
        >
            {children}
        </div>
        {trailing && <div className={cnListTileTrailing}>{trailing}</div>}
    </div>
);

ListTile.displayName = cnListTile();
