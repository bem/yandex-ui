import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IButtonProps, cnButton } from '../Button';

export interface IButtonTypeLinkProps {
    /**
     * Тип кнопки
     */
    type?: 'link';
    /**
     * Адрес
     */
    url?: string;
    /**
     * Поведение, которое определяет, где показать содержимое по ссылке
     */
    target?: string;
    /**
     * Отношения между ссылками
     */
    rel?: string;
    /**
     * @internal
     */
    href?: string;
    /**
     * HTML-атрибут tabIndex. Определяет последовательность перехода между ссылками при нажатии на кнопку Tab
     */
    tabIndex?: number;
}

export const withTypeLink = withBemMod<IButtonTypeLinkProps, IButtonProps>(
    cnButton(),
    { type: 'link' },
    (WrappedComponent) => {
        return ({ type, target, rel, url, disabled, tabIndex, ...props }) => {
            let relationship = rel;

            if (target === '_blank' && rel !== undefined && rel.indexOf('noopener') === -1) {
                // Пользовательский атрибут имеет больший приоритет
                relationship = `${rel} noopener`;
            }

            return (
                <WrappedComponent
                    {...props}
                    rel={relationship}
                    target={target}
                    disabled={disabled}
                    href={disabled ? undefined : url}
                    tabIndex={disabled ? -1 : tabIndex}
                    as="a"
                />
            );
        };
    },
);
