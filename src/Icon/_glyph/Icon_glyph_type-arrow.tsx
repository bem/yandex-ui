import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-arrow.css';

export interface IWithGlyphTypeArrowProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-arrow';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeArrow = withBemMod<IWithGlyphTypeArrowProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-arrow' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            {props.size === 'xs' ? (
                <svg focusable="false" width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.25 1L5.5 4.6 1.75 1 1 1.72 5.5 6 10 1.72 9.25 1z" />
                </svg>
            ) : (
                <svg focusable="false" width="13" height="8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3 1L6.5 5.7 1.7 1l-.7.7L6.5 7 12 1.7l-.7-.7z" />
                </svg>
            )}
        </Icon>
    ),
);
