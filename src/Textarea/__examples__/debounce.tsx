import React, { useState } from 'react';
import { Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';

export const Debounce = (props: any) => {
    const { onChange, onInput } = props;
    const [value, setValue] = useState('');
    const [typing, setTyping] = useState(false);

    return (
        <div style={{ maxWidth: 300 }}>
            <Textarea
                debounceTimeout={500}
                size="m"
                view="default"
                value={value}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    onChange?.(event.target.value);
                    setTyping(false);
                    setValue(event.target.value);
                }}
                onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    onInput?.(event.target.value);
                    setTyping(true);
                }}
            />
            <pre style={{ marginTop: 16 }}>{typing ? 'Печатает...' : ''}</pre>
        </div>
    );
};

Debounce.argTypes = {
    onChange: { action: 'change' },
    onInput: { action: 'change' },
};
