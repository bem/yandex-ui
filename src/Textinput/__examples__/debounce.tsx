import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Spacer } from '@yandex-lego/components/Spacer';
import { Spin } from '@yandex-lego/components/Spin';

export const Debounce = () => {
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
                try {
                    action('onChange')(event.target.value);
                } catch (error) {
                    if (!error.message.startsWith('Accessing non-existent addons channel')) {
                        throw error;
                    }
                }
                setTyping(false);
                setValue(event.target.value);
            }}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                try {
                    action('onInput')(event.target.value);
                } catch (error) {
                    if (!error.message.startsWith('Accessing non-existent addons channel')) {
                        throw error;
                    }
                }
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
