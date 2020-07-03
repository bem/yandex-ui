import React, { FC } from 'react';

import { cnTooltip } from '../Tooltip';
import './Tooltip-Backdrop.css';

// prettier-ignore
export const TooltipBackdrop: FC<{}> = ({ children }) => (
    <div className={cnTooltip('Backdrop')}>{children}</div>
);
