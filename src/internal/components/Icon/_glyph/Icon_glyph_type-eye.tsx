import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../../../../Icon/Icon';
import '../../../../Icon/_glyph/Icon_glyph.css';

export interface IWithGlyphTypeEyeProps {
    glyph?: 'type-eye';
}

export const withGlyphTypeEye = withBemMod<IWithGlyphTypeEyeProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-eye' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    d="M0 7.5S2.8 3 7 3s7 4.5 7 4.5S11.2 12 7 12 0 7.5 0 7.5zm7-3c1.546 0 2.8 1.343 2.8 3s-1.254 3-2.8 3c-1.546 0-2.8-1.343-2.8-3s1.254-3 2.8-3zM7 6c.774 0 1.4.671 1.4 1.5C8.4 8.328 7.773 9 7 9c-.773 0-1.4-.672-1.4-1.5C5.6 6.671 6.227 6 7 6z"
                />
            </svg>
        </Icon>
    ),
);
