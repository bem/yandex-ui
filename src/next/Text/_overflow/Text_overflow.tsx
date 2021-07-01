import './Text_overflow.css';
import { IClassNameProps, withBemMod } from '@bem-react/core';
import React from 'react';
import { cnText } from '../Text';

export type TextOverflowValue =
    | 'fade'
    | 'ellipsis'
    | 'fade-horizontal';

export interface TextOverflowProps {
    overflow?: TextOverflowValue;
}

/**
 * Модификатор, отвечающий за обрезание текста.
 * @param {TextOverflowProps} props
 */
export const withOverflow = withBemMod<TextOverflowProps, IClassNameProps>(cnText(), { overflow: '*' }, (WrappedComponent) => ({ className, ...props }) => {
    return <WrappedComponent className={cnText({ overflow: props.overflow }, [className])} {...props} />;
});
