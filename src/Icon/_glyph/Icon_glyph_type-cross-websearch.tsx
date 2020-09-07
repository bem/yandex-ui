import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-cross-websearch.css';

export interface IWithGlyphTypeCrossWebsearchProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-cross-websearch';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeCrossWebsearch = withBemMod<IWithGlyphTypeCrossWebsearchProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-cross-websearch' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M6.586 8L.93 2.343 2.342.93 8 6.585 13.657.93l1.414 1.413L9.42 8l5.657 5.657-1.413 1.414L8 9.42l-5.657 5.65L.93 13.658 6.585 8z" />
            </svg>
        </Icon>
    ),
);
