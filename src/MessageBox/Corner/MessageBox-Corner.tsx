import React, { FC } from 'react';

import { cnMessageBox } from '../MessageBox';
import './MessageBox-Corner.css';

export type MessageBoxCornerProps = {
    side: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    width: number;
    height?: number;
};

const sidePositionCalc = {
    'bottom-left': (width: number, height: number) => ({
        left: -Math.floor(width / 3),
        bottom: -Math.floor(height / 3),
    }),
    'bottom-right': (width: number, height: number) => ({
        right: -Math.floor(width / 3),
        bottom: -Math.floor(height / 3),
    }),
    'top-left': (width: number, height: number) => ({
        left: -Math.floor(width / 3),
        top: -Math.floor(height / 3),
    }),
    'top-right': (width: number, height: number) => ({
        right: -Math.floor(width / 3),
        top: -Math.floor(height / 3),
    }),
};

export const MessageBoxCorner: FC<MessageBoxCornerProps> = ({ children, side, width, height }) => {
    if (!height) {
        height = width;
    }
    const style = {
        width,
        height,
        ...sidePositionCalc[side](width, height),
    };

    return (
        <span className={cnMessageBox('Corner')} style={style}>
            {children}
        </span>
    );
};
