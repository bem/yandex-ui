import React from 'react';
import { Badge } from '@yandex-lego/components/Badge';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const BadgeInButton = () => (
    <>
        <Badge>
            <Button view="default" size="m">очень важная</Button>
        </Badge>
        <br />
        <br />
        <Badge outlineColor="transparent" content={5}>
            <Button view="default" size="m">очень важная с цифрой</Button>
        </Badge>
        <br />
        <br />
        <Button view="default" size="m">
            Закладка
            <Badge color="#0679ff" outlineColor="#0679ff" content={5} style={{ marginLeft: 5 }} />
        </Button>
    </>
);
