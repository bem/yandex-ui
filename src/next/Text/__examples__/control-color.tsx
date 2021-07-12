import React from 'react';
import { Text } from '@yandex-lego/components/next/Text/bundle';

export const ControlColor = () => (
    <>
        {([
            'control-primary',
            'control-secondary',
            'control-passive',
            'control-ghost',
            'control-faint',
            'control-disable',
            'control-link',
            'control-error',
        ] as const).map((color) => (
            <Text
                as="div"
                key={color}
                typography="control-xl"
                weight="light"
                color={color}
                style={{ backgroundColor: color === 'control-faint' ? '#000' : undefined }}
            >
                {`${color} color`}
            </Text>
        ))}
    </>
);
