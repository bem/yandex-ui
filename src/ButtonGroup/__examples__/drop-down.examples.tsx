import React, { ReactNode } from 'react';

import { ButtonGroup, useButtonGroupState } from '@yandex-lego/components/ButtonGroup/desktop';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';
import { Dropdown as DropdownWrapper } from '@yandex-lego/components/Dropdown/desktop';

// Обертка над Dropdown, для того передачи пропсов из ButtonGroup в кнопку
const Dropdown = (props: { children: ReactNode }) => (
    <DropdownWrapper view="default" trigger="click" content={'Dropdowned'}>
        <Button view="default" size="m" {...props}>
            {props.children}
        </Button>
    </DropdownWrapper>
);

export const DropDown = () => {
    const state = useButtonGroupState({ type: 'radio' });

    return (
        <>
            <ButtonGroup pin="round">
                <DropdownWrapper view="default" trigger="click" content={'Dropdowned'}>
                    <Button view="default" size="m">
                        Dropdown
                    </Button>
                </DropdownWrapper>
                <DropdownWrapper view="default" trigger="click" content={'Dropdowned'}>
                    <Button view="default" size="m">
                        Dropdown
                    </Button>
                </DropdownWrapper>
                <DropdownWrapper view="default" trigger="click" content={'Dropdowned'}>
                    <Button view="default" size="m">
                        Dropdown
                    </Button>
                </DropdownWrapper>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup pin="circle" {...state}>
                <Dropdown> Dropdown </Dropdown>
                <Button view="action" size="m">
                    Button 1
                </Button>
                <Button view="action" size="m">
                    Button 2
                </Button>
            </ButtonGroup>
        </>
    );
};
