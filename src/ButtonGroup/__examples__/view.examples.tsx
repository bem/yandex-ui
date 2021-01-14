import React from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const View = () => (
    <>
        <ButtonGroup>
            <Button view="default"> Button 1 </Button>
            <Button view="default"> Button 2 </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup>
            <Button view="action" size="s">
                Button 1
            </Button>
            <Button view="link" size="s">
                Button 2
            </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup>
            <Button view="action" pin="circle-clear" size="m">
                Button 1
            </Button>
            <Button view="action" pin="clear-circle" size="m">
                Button 2
            </Button>
        </ButtonGroup>
    </>
);
