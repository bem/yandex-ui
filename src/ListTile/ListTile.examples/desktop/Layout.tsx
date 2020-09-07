import React, { HTMLProps } from 'react';
import './Layout.css';
import { cn } from '@bem-react/classname';
import { Text } from '../../../Text/Text.bundle/common';

interface CellProps extends HTMLProps<HTMLDivElement> {
    label?: string;
}

const cnCell = cn('Cell');
const cnCellLabel = cnCell('Label');

export const Cell = ({ children, label }: CellProps) => (
    <div className={cnCell()}>
        {label && (
            <Text className={cnCellLabel} as="h3" typography="control-xs" color="secondary">
                {label}
            </Text>
        )}
        {children}
    </div>
);
