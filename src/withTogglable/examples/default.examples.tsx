import React from 'react';

import { withTogglable } from '@yandex-lego/components/withTogglable';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';

const ComponentWithToggable = withTogglable(({ opened, setOpened, ...props }) => (
    <Button
        // @ts-ignore
        onClick={() => setOpened(!opened)}
        view={opened ? 'action' : 'default'}
        size="m"
        {...props}
    >
        {opened ? 'Opened' : 'Closed' }
    </Button>
));

export const Default = () => <ComponentWithToggable />;
