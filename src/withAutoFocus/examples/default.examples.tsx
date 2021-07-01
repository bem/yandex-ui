import React, { useState } from 'react';

import { withAutoFocus } from '@yandex-lego/components/withAutoFocus';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';

const InputWithAutoFocus = withAutoFocus(Textinput);

export const Default = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <Button onClick={() => setIsFocused(true)} view="action" size="m"> Установить фокус </Button> &nbsp;
            <Button onClick={() => setIsFocused(false)} view="default" size="m"> Сбросить фокус </Button> <br /> <br />
            <InputWithAutoFocus view="default" focused={isFocused} size="m" />
        </>
    );
};
