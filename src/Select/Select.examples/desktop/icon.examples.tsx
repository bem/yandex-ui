import React, { useState, useRef } from 'react';
import { Select } from '@yandex-lego/components/Select/Select.bundle/desktop';

const options = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Icon = () => {
    const [value, setValue] = useState('a');
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
                view="default"
                size="m"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={options}
                iconProps={{
                    type: 'arrow',
                }}
            />
        </div>
    );
};
