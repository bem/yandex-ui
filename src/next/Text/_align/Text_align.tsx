import './Text_align.css';
import { IClassNameProps, withBemMod } from '@bem-react/core';

import React from 'react';
import { cnText } from '../Text';

export type TextAlignValue =
    | 'start'
    | 'end'
    | 'center'
    | 'justify';

export interface TextAlignProps {
    align?: TextAlignValue;
}

/**
 * Модификатор, отвечающий за выравнивание текста.
 * @param {TextAlignProps} props
 */
export const withAlign = withBemMod<TextAlignProps, IClassNameProps>(cnText(), { align: '*' }, (WrappedComponent) => ({ align, className, ...props }) => {
    return <WrappedComponent className={cnText({ align }, [className])} {...props} />;
});
