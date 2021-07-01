import React from 'react';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';

export const Color = () => (
    <>
        {([
            'primary',
            'brand',
            'inverse',
            'promo',
            'secondary',
            'ghost',
            'disable',
            'warning',
            'success',
            'alert',
        ] as const).map((color) => (
            <Text
                as="div"
                key={color}
                typography="control-xl"
                weight="light"
                color={color}
                style={{ backgroundColor: color === 'inverse' ? '#000' : undefined }}
            >
                {`${color} color`}
            </Text>
        ))}
    </>
);
