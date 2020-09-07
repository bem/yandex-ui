import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-check.css';

export interface IWithGlyphTypeCheckProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-check';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeCheck = withBemMod<IWithGlyphTypeCheckProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-check' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="10">
                <path d="M7.207 7.506L3.629 3.81 2.343 4.939l4.841 5.002 8.462-8.428L14.382.362z" />
            </svg>
        </Icon>
    ),
);
