import React from 'react';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';
import { Text } from '@yandex-lego/components/Text/bundle';

import { SampleMenu } from './SampleMenu';

export const Common = () => (
    <>
        <Text as="h2" typography="headline-l">
            Базовый пример
        </Text>
        <div>
            <Dropdown view="default" trigger="click" content={<SampleMenu />}>
                <Link tabIndex={1} view="default" pseudo>
                    Link, click me
                </Link>
            </Dropdown>
        </div>
    </>
);
