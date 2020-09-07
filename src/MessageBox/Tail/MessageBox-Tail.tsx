import React, { FC, Ref } from 'react';

import { cnMessageBox } from '../MessageBox';
import './MessageBox-Tail.css';

export type MessageBoxTailProps = {
    innerRef?: Ref<HTMLDivElement>;
    tailType?: 'default' | 'rounded';
};

export const MessageBoxTail: FC<MessageBoxTailProps> = ({ innerRef, tailType }) => (
    <div ref={innerRef} className={cnMessageBox('Tail')}>
        {tailType === 'default' ? (
            <svg viewBox="0 0 20 20">
                <path fill="currentColor" d="M20 20H0c5 0 7.949-3.872 10-9 2.051 5.128 5 9 10 9z" />
            </svg>
        ) : (
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 16c3 0 6 8 12 8H0c6 0 9-8 12-8z" />
            </svg>
        )}
    </div>
);
