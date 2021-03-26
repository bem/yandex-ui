import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';
import { Direction } from '@yandex-lego/components/Popup';

import { SampleMenu } from './SampleMenu';

const DropdownInner = (direction: Direction, index: number) => (
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
);

export const Tail = () => (
    <div>
        {['bottom-start', 'bottom', 'bottom-end'].map((el, index) => DropdownInner(el as Direction, index))}
        <br /><br /><br />
        {['top-start', 'top', 'top-end'].map((el, index) => DropdownInner(el as Direction, index))}
    </div>
);
