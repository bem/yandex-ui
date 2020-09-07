import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_carets-v.css';

export interface IWithGlyphCaretsVProps {
    /**
     * Символ иконки
     */
    glyph?: 'carets-v';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphCaretsV = withBemMod<IWithGlyphCaretsVProps, IIconProps>(
    cnIcon(),
    { glyph: 'carets-v' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="8" height="14">
                <path d="M4 0l4 6H0l4-6zm0 14l4-6H0l4 6z" />
            </svg>
        </Icon>
    ),
);
