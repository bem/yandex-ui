import React, { useState } from 'react';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Spacer } from '@yandex-lego/components/Spacer';
import { Spin } from '@yandex-lego/components/Spin';

export const Debounce = (props: any) => {
    const { onChange, onInput } = props;
    const [value, setValue] = useState('');
    const [typing, setTyping] = useState(false);

    return (
        <Textinput
            debounceTimeout={500}
            size="m"
            view="default"
            value={value}
            style={{ maxWidth: 300 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                onChange?.(event.target.value);
                setTyping(false);
                setValue(event.target.value);
            }}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                onInput?.(event.target.value);
                setTyping(true);
            }}
            iconRight={
                (typing || undefined) && (
                    <Spacer all="10px">
                        <Spin progress />
                    </Spacer>
                )
            }
        />
    );
};

Debounce.argTypes = {
    onChange: { action: 'change' },
    onInput: { action: 'change' },
};
