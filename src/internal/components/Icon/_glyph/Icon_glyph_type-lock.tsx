import React from 'react';
import { withBemMod } from '@bem-react/core';

import { IIconProps, cnIcon } from '../../../../components/Icon/Icon';
import '../../../../components/Icon/_glyph/Icon_glyph.css';

export interface IWithGlyphTypeLockProps {
    glyph?: 'type-lock';
}

export const withGlyphTypeLock = withBemMod<IWithGlyphTypeLockProps, IIconProps>(
    cnIcon(),
    { glyph: 'type-lock' },
    (Icon) => ({ className, ...props }) => (
        <Icon {...props} className={cnIcon({ hasGlyph: true }, [className])}>
            <svg focusable="false" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    d="M12 5.6v-.933S11.938 0 7 0 2 4.667 2 4.667V5.6H1v6.533S1 14 3 14h8s2 .059 2-1.867V5.6h-1zm-2 0H4v-.933s0-2.8 3-2.8 3 2.8 3 2.8V5.6z"
                />
            </svg>
        </Icon>
    ),
);
