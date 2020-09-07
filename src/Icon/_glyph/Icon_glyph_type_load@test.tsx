import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';

export interface IWithGlyphTypeLoadProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-load';
}

/**
 * Модификатор, отвечающий за символ иконки.
 */
export const withGlyphTypeLoad = withBemMod<IWithGlyphTypeLoadProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-load' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M1 13v2h14v-2H1zm13-7h-3V1H5v5.03L2 6l6 6 6-6z" />
            </svg>
        </Icon>
    ),
);
