import React, { HTMLAttributes, RefObject } from 'react';
import { cn } from '@bem-react/classname';

import './Hermione.css';

export const cnHermione = cn('Hermione');

export interface IHermioneProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Элемент блока.
     */
    element?: string;

    /**
     * Дополнительные модификаторы.
     */
    modifiers?: {};

    /**
     * Ссылка на рутовый DOM элемент компонента.
     */
    innerRef?: RefObject<HTMLDivElement>;
}

/**
 * Вспомогательный блок для hermione тестов.
 * @internal
 */
export const Hermione = ({ children, className, element, innerRef, modifiers, ...props }: IHermioneProps) => (
    <div
        {...props}
        className={
            element === undefined ? cnHermione(modifiers, [className]) : cnHermione(element, modifiers, [className])
        }
        ref={innerRef}
    >
        {children}
    </div>
);
