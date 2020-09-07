import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_x-sign.css';

export interface IWithGlyphXSignProps {
    /**
     * Символ иконки
     */
    glyph?: 'x-sign';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphXSign = withBemMod<IWithGlyphXSignProps, IIconProps>(
    cnIcon(),
    { glyph: 'x-sign' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg viewBox="0 0 20 20">
                <path
                    focusable="false"
                    width="0"
                    height="0"
                    d="M10,20 C4.5,20 0,15.5 0,10 C0,4.5 4.5,0 10,0 C15.5,0 20,4.5 20,10 C20,15.5 15.5,20 10,20 L10,20 L10,20 L10,20 Z M15,6.4 L13.6,5 L10,8.6 L6.4,5 L5,6.4 L8.6,10 L5,13.6 L6.4,15 L10,11.4 L13.6,15 L15,13.6 L11.4,10 L15,6.4 L15,6.4 L15,6.4 L15,6.4 Z"
                />
            </svg>
        </Icon>
    ),
);
