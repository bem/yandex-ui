import React from 'react';
import { Badge } from '@yandex-lego/components/Badge';

export const WithBadgeContent = () => (
    <>
        <Badge />
        <br />
        <br />
        <Badge content={5} />
    </>
);
