import React from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Size = () => (
    <>
        <ButtonGroup>
            <Button view="default"> Button default size </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup>
            <Button size="s" view="default">
                Button small size
            </Button>
        </ButtonGroup>
    </>
);
