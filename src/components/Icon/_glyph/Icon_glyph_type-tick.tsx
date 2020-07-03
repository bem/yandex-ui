import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-tick.css';

export interface IWithGlyphTypeTickProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-tick';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeTick = withBemMod<IWithGlyphTypeTickProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-tick' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" viewBox="0 0 12 10" width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <path d="M.49 5.385l1.644-1.644 4.385 4.385L4.874 9.77.49 5.385zm4.384 1.096L10.356 1 12 2.644 6.519 8.126 4.874 6.48v.001z" />
            </svg>
        </Icon>
    ),
);
