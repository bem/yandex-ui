import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-indeterminate.css';

export interface IWithGlyphTypeIndeterminateProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-indeterminate';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeIndeterminate = withBemMod<IWithGlyphTypeIndeterminateProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-indeterminate' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" d="M4 7h9v3H4z" />
            </svg>
        </Icon>
    ),
);
