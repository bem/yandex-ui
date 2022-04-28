import React from 'react';

import { UserPic } from '../../touch-phone/bundle';
import { EXAMPLE_TOUCH_PHONE_TOKEN, parameters } from '../examples-config';

export default {
    title: EXAMPLE_TOUCH_PHONE_TOKEN,
    parameters,
};

export const Default = () => (
    <>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="43978/351415393-30646433" />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic avatarId="0/0-0" hasCamera />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic plus avatarId="0/0-0" hasCamera />
        </div>
        <div style={{ marginRight: '20px', display: 'inline-block' }}>
            <UserPic lodpiUrl="https://jing.yandex-team.ru/files/kri0-gen/halp_orange.jpg" />
        </div>
    </>
);
