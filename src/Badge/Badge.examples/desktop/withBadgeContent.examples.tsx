import React from 'react';
import { Badge } from '@yandex-lego/components/Badge/desktop';

export const WithBadgeContent = () => (
    <>
        <Badge />
        <br />
        <br />
        <Badge content={5} />
    </>
);
