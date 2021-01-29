import React, { useRef } from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Dropdown } from '@yandex-lego/components/Dropdown/desktop';
import { Icon } from '@yandex-lego/components/Icon/Icon.bundle/desktop';
import { SampleMenu } from './SampleMenu';

import './split.css';

export const SplitButton = () => {
    const anchor = useRef<HTMLElement>(null);

    return (
        <>
            <ButtonGroup pin="round" gap="s">
                <Button view="action" size="s" className="Button_wide">
                    Button
                </Button>
                <Dropdown direction="bottom-start" view="default" hasTail content={<SampleMenu />}>
                    <Button
                        innerRef={anchor}
                        view="action"
                        size="s"
                        icon={(className) => <Icon type="arrow" className={className} />}
                    />
                </Dropdown>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup pin="round" vertical>
                <Button view="link" size="s">
                    Button
                </Button>
                <Button view="link" size="s">
                    Button
                </Button>
                <Dropdown direction="right" view="default" hasTail content={<SampleMenu />}>
                    <Button
                        innerRef={anchor}
                        view="link"
                        size="s"
                        icon={(className) => <Icon type="arrow" className={className} />}
                    />
                </Dropdown>
            </ButtonGroup>
        </>
    );
};
