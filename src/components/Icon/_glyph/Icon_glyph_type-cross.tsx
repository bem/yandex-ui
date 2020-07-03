import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../Icon';
import './Icon_glyph.css';
import './Icon_glyph_type-cross.css';

export interface IWithGlyphTypeCrossProps {
    /**
     * Символ иконки
     */
    glyph?: 'type-cross';
}

/**
 * Модификатор, отвечающий за символ иконки.
 * @param {IIconGlyphProps} props
 */
export const withGlyphTypeCross = withBemMod<IWithGlyphTypeCrossProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-cross' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            {props.size === 'xs' ? (
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <polygon points="10,0.7 9.3,0 5,4.3 0.7,0 0,0.7 4.3,5 0,9.3 0.7,10 5,5.7 9.3,10 10,9.3 5.7,5" />
                </svg>
            ) : (
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                    <polygon points="14,0.7 13.3,0 7,6.3 0.7,0 0,0.7 6.3,7 0,13.3 0.7,14 7,7.7 13.3,14 14,13.3 7.7,7" />
                </svg>
            )}
        </Icon>
    ),
);
