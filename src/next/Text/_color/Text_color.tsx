import './Text_color.css';
import { IClassNameProps, withBemMod } from '@bem-react/core';
import React from 'react';
import { cnText } from '../Text';

export type TextColorValue =
    | 'primary'
    | 'brand'
    | 'inverse'
    | 'promo'
    | 'secondary'
    | 'ghost'
    | 'control-primary'
    | 'alert'
    | 'warning'
    | 'disable'
    | 'success'
    | 'control-secondary'
    | 'control-passive'
    | 'control-ghost'
    | 'control-faint'
    | 'control-disable'
    | 'control-link'
    | 'control-error'
    | 'link'
    | 'link-external'
    | 'link-minor'
    | 'link-hover';

export interface TextColorProps {
    color?: TextColorValue;
}

/**
 * Модификатор, отвечающий за цвет текста.
 * @param {TextColorProps} props
 */
export const withColor = withBemMod<TextColorProps, IClassNameProps>(cnText(), { color: '*' }, (WrappedComponent) => ({ color, className, ...props }) => {
    return <WrappedComponent className={cnText({ color }, [className])} {...props} />;
});
