import React from 'react';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Direction } from '@yandex-lego/components/Popup';
import { Text } from '@yandex-lego/components/Text/bundle';

import { SampleMenu } from './SampleMenu';

export const Directions = () => (
    <>
        <Text as="h2" typography="headline-l">
            Направления
        </Text>
        <div>
            {['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'].map(
                (direction, index) => (
                    <Dropdown
                        key={index}
                        view="default"
                        style={{
                            margin: '1rem 1rem 0 0',
                        }}
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
