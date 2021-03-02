import React from 'react';
import { ListTile } from '@yandex-lego/components/ListTile/desktop';
import { Tumbler } from '@yandex-lego/components/Tumbler/desktop/bundle';
import { UserPic } from '@yandex-lego/components/UserPic/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';

export const Default = () => (
    <ListTile
        alignItems="start"
        leftSpace={'m'}
        rightSpace={'m'}
        leading={<UserPic />}
        trailing={<Tumbler view="default" size="m" checked={false} onChange={() => null} />}
    >
        <Text as="div" typography="overline-l" weight="medium" color="secondary">
            Overline
        </Text>
        <Text as="div" typography="control-xl" weight="regular" color="primary">
            One-line item
        </Text>
    </ListTile>
);
