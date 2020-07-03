import React, { FC, MouseEventHandler } from 'react';

import { cnMessageBox } from '../MessageBox';
import './MessageBox-Close.css';

export type MessageBoxCloseProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    closeText?: string;
};

export const MessageBoxClose: FC<MessageBoxCloseProps> = ({ closeText = 'Закрыть', onClick }) => {
    return (
        <button className={cnMessageBox('Close')} onClick={onClick} type="button" aria-label={closeText}>
            {/* TODO: Save as assets and require here with svgo optimization. */}
            <svg viewBox="0 0 16 16">
                <path
                    fill="currentColor"
                    d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zM4.995 3.934L8 6.94l3.005-3.005 1.06 1.061L9.06 8l3.006 3.005-1.061 1.06L8 9.062l-3.005 3.005-1.06-1.061L6.938 8 3.934 4.995l1.06-1.06z"
                />
            </svg>
        </button>
    );
};
