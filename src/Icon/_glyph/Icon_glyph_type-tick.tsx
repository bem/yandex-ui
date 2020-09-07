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
            <svg width="14" height="10" viewBox="0 0 14 10">
                <path d="M1.49 4.885l1.644-1.644 4.385 4.385L5.874 9.27 1.49 4.885zm4.384 1.096L11.356.5 13 2.144 7.519 7.626 5.874 5.98v.001z" />
            </svg>
        </Icon>
    ),
);
