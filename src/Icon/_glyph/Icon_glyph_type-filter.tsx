import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-filter.css';

export interface IWithGlyphTypeFilterProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-filter';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeFilter = withBemMod<IWithGlyphTypeFilterProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-filter' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20" height="16">
                <path d="M7.17 12H0v2h7.17c.413 1.165 1.524 2 2.83 2s2.417-.835 2.83-2H20v-2h-7.17c-.413-1.165-1.524-2-2.83-2s-2.417.835-2.83 2zm-7-10H0v2h.17C.584 5.165 1.695 6 3 6s2.417-.835 2.83-2H20V2H5.83C5.416.835 4.305 0 3 0S.583.835.17 2z" />
            </svg>
        </Icon>
    ),
);
