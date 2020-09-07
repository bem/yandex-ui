import React, { FC, RefObject, CSSProperties, ElementType } from 'react';
import { cn } from '@bem-react/classname';

import { DividerLine, DividerLineProps } from './Line/Divider-Line';
import './Divider.css';

export interface DividerProps extends DividerLineProps {
    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLElement>;

    /**
     * Пользовательские стили
     */
    style?: CSSProperties;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Компонент для рендера разделителя
     * @default 'div'
     */
    as?: ElementType;
}

export const cnDivider = cn('Divider');

/**
 * Компонент для отделения одной информации от другой.
 * @param {IDividerProps} props
 */
export const Divider: FC<DividerProps> = ({
    size = 1,
    color,
    innerRef,
    style,
    className,
    children,
    as: Component = 'div',
    ...props
}) => (
    <Component {...props} ref={innerRef} className={cnDivider(null, [className])} style={style}>
        <DividerLine size={size} color={color} />
        {children}
        {children && <DividerLine size={size} color={color} />}
    </Component>
);

Divider.displayName = cnDivider();
