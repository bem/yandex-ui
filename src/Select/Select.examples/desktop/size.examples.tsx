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

export const Size = () => {
    const [value1, setValue1] = useState('a');
    const [value2, setValue2] = useState('a');
    const scopeRef = useRef(null);

    return (
        <div ref={scopeRef} style={{ position: 'relative' }}>
            <Select
                unsafe_scope={scopeRef}
                size="m"
                view="default"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
                options={options}
            />{' '}
            <Select
                unsafe_scope={scopeRef}
                size="s"
                view="default"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
                options={options}
            />
        </div>
    );
};
