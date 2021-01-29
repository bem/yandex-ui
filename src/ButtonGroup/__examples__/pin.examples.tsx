import React from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Pin = () => (
    <>
        <ButtonGroup pin="circle">
            <Button view="action" size="m">
                Button 1
            </Button>
            <Button view="action" size="m">
                Button 2
            </Button>
            <Button view="action" size="m">
                Button 3
            </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup pin="round">
            <Button view="action" size="m">
                Button 1
            </Button>
            <Button view="action" size="m">
                Button 2
            </Button>
            <Button view="action" size="m">
                Button 3
            </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup pin="round" vertical>
            <Button view="action" size="m">
                Button 1
            </Button>
            <Button view="action" size="m">
                Button 2
            </Button>
            <Button view="action" size="m">
                Button 3
            </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup pin="circle" gap="m">
            <Button view="action" size="m">
                Button 1
            </Button>
            <Button view="action" size="m">
                Button 2
            </Button>
            <Button view="action" size="m">
                Button 3
            </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup pin="round" gap="s">
            <Button view="action" size="m">
                Button 1
            </Button>
            <Button view="action" size="m">
                Button 2
            </Button>
            <Button view="action" size="m">
                Button 3
            </Button>
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup pin="round" gap="s" vertical>
            <Button view="action" size="m">
                Button 1
            </Button>
            <Button view="action" size="m">
                Button 2
            </Button>
            <Button view="action" size="m">
                Button 3
            </Button>
        </ButtonGroup>
        <br /> <br />
    </>
);
