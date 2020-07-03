import React, { FC, Ref } from 'react';

import { cnMessageBox } from '../MessageBox';
import './MessageBox-Tail.css';

export type MessageBoxTailProps = {
    innerRef?: Ref<HTMLDivElement>;
};

export const MessageBoxTail: FC<MessageBoxTailProps> = ({ innerRef }) => (
    <div ref={innerRef} className={cnMessageBox('Tail')}>
        <svg viewBox="0 0 20 10">
            <path fill="currentColor" d="M20 10H0c5 0 7.949-3.872 10-9 2.051 5.128 5 9 10 9z" />
        </svg>
    </div>
);
