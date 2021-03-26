import React, { useRef, useState } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/bundle';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';

import { SampleMenu } from './SampleMenu';

export const Arrow = () => {
    const anchor = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <Dropdown
                onVisibleChange={(isVisible) => setVisible(isVisible)}
                trigger="click"
                view="default"
                hasTail
                content={<SampleMenu />}
            >
                <Button
                    innerRef={anchor}
                    theme="normal"
                    size="s"
                    iconRight={(className) => (
                        <Icon direction={visible ? 'top' : 'bottom'} glyph="type-arrow" className={className} />
                    )}
                >
                    Click me
                </Button>
            </Dropdown>
        </div>
    );
};
