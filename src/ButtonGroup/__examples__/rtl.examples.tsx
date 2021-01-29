import React, { useState } from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Rtl = () => {
    const [rtl, setRtl] = useState(false);

    return (
        <>
            <Button onClick={() => setRtl((prev) => !prev)} view="action" size="m">
                {rtl ? 'С права на лево' : 'С лева на право'}
            </Button>
            <br /> <br /> <br />
            <div dir={rtl ? 'rtl' : ''}>
                <ButtonGroup pin="round" gap="s">
                    <Button view="action" size="m">
                        Button 1
                    </Button>
                    <Button view="action" size="m">
                        Button 2
                    </Button>
                </ButtonGroup>
                <br /> <br />
                <ButtonGroup pin="circle">
                    <Button view="link" size="m">
                        Button 1
                    </Button>
                    <Button view="link" size="m">
                        Button 2
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};
