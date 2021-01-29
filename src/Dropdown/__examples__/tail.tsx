import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';
import { Direction } from '@yandex-lego/components/Popup';

import { SampleMenu } from './SampleMenu';

export const Tail = () => (
    <>
        <Text as="h2" typography="headline-l">
            Направления c хвостиком у попапа
        </Text>
        <div>
            {(['bottom-start', 'bottom', 'bottom-end', 'top-start', 'top', 'top-end']).map(
                (direction, index) => (
                    <Dropdown
                        key={index}
                        view="default"
                        style={{
                            margin: '1rem 1rem 0 0',
                        }}
                        hasTail
                        direction={direction as Direction}
                        content={<SampleMenu />}
                    >
                        <Button view="default" size="s">
                            {direction}
                            &nbsp;direction
                        </Button>
                    </Dropdown>
                ),
            )}
        </div>
    </>
);
