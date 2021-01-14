import React, { useState } from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Disabled = () => {
    const [disabled, setDisabled] = useState(true);

    return (
        <>
            <ButtonGroup disabled={disabled}>
                <Button size="m" view="action">
                    Button 1
                </Button>
                <Button size="m" view="action">
                    Button 2
                </Button>
            </ButtonGroup>
            &nbsp;
            <Checkbox
                checked={disabled}
                onClick={() => setDisabled((prev) => !prev)}
                view="default"
                size="m"
                label="Disabled"
            />
        </>
    );
};
