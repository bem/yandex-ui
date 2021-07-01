import React from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

export const LinkColor = () => (
    <>
        {(['link', 'link-external', 'link-minor', 'link-hover'] as const).map((color) => (
            <Text as="div" key={color} typography="control-xl" weight="light" color={color}>
                {`${color} color`}
            </Text>
        ))}
    </>
);
