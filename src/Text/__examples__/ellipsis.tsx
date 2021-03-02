import React from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

export const Ellipsis = () => (
    <Text typography="display-s" weight="light" maxLines={1} overflow="ellipsis">
        Миссия Яндекса — помогать людям решать задачи и достигать своих целей в жизни.
    </Text>
);
