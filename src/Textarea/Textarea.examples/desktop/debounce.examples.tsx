import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';

export const Debounce = () => {
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
                    action('onChange')(event.target.value);
                    setTyping(false);
                    setValue(event.target.value);
                }}
                onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    action('onInput')(event.target.value);
                    setTyping(true);
                }}
            />
            <pre style={{ marginTop: 16 }}>
                {typing ? 'Печатает...' : ''}
            </pre>
        </div>
    );
};
