import React from 'react';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';

import { SampleMenu } from './SampleMenu';

export const Common = () => (
    <div>
        <Dropdown view="default" trigger="click" content={<SampleMenu />}>
            <Link tabIndex={1} view="default" pseudo>
                Link, click me
            </Link>
        </Dropdown>
    </div>
);
