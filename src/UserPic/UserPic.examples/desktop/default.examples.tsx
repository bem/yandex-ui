import React from 'react';

import { UserPic } from '@yandex-lego/components/UserPic/desktop/bundle';

export const Default = () => (
    <>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="43978/351415393-30646433" size="m" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic avatarId="0/0-0" hasCamera size="m" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="0/0-0" hasCamera size="m" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic lodpiUrl="https://jing.yandex-team.ru/files/kri0-gen/halp_orange.jpg" size="m" />
        </div>
    </>
);
