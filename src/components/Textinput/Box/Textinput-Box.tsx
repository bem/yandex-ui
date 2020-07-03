import React, { FC } from 'react';

import { cnTextinput } from '../Textinput';
import './Textinput-Box.css';

export interface TextinputBoxProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const TextinputBox: FC<TextinputBoxProps> = ({ className, ...props }) => (
    <span {...props} className={cnTextinput('Box', null, [className])} />
);
