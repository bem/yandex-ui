import React from 'react';
import { Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';

export const State = () => (
    <Textarea state="error" hint="Error message" size="m" view="default" defaultValue="view default" />
);
