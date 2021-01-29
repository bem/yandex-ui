import React, { useState } from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Vertical = () => {
    const [vertical, setVertical] = useState(false);

    return (
        <>
            <ButtonGroup vertical={vertical}>
                <Button size="m" view="action" onClick={() => setVertical((prev) => !prev)}>
                    {vertical ? 'Сделать горизонтальной' : 'Сделать вертикальной'}
                </Button>
                <Button size="m" view="action">
                    Button 1
                </Button>
                <Button size="m" view="action">
                    Button 2
                </Button>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup vertical={vertical} pin="round" gap="s">
                <Button size="m" view="action" onClick={() => setVertical((prev) => !prev)}>
                    {vertical ? 'Сделать горизонтальной' : 'Сделать вертикальной'}
                </Button>
                <Button size="m" view="action">
                    Button 1
                </Button>
                <Button size="m" view="action">
                    Button 2
                </Button>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup vertical={vertical} pin="circle">
                <Button size="m" view="action" onClick={() => setVertical((prev) => !prev)}>
                    {vertical ? 'Сделать горизонтальной' : 'Сделать вертикальной'}
                </Button>
                <Button size="m" view="action">
                    Button 1
                </Button>
                <Button size="m" view="action">
                    Button 2
                </Button>
            </ButtonGroup>
        </>
    );
};
