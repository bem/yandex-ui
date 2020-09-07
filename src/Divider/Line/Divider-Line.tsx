import React, { FC } from 'react';

import { cnDivider } from '../Divider';

export interface DividerLineProps {
    /**
     * Высота разделителя в пикселях
     *
     * @default 1
     */
    size?: number;

    /**
     * Цвет разделителя
     */
    color?: string;
}

export const DividerLine: FC<DividerLineProps> = ({ size = 1, color }) => (
    <span className={cnDivider('Line')} style={{ height: size > 0 ? size : 1, backgroundColor: color }} />
);
