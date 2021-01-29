import React, { useState, useRef } from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Select as SelectComponent } from '@yandex-lego/components/Select/desktop/bundle';

const options = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

export const Select = () => {
    const [value, setValue] = useState('a');
    const scopeRef = useRef(null);

    return (
        <ButtonGroup pin="round">
            <div ref={scopeRef} style={{ position: 'relative' }}>
                <SelectComponent
                    unsafe_scope={scopeRef}
                    view="default"
                    size="m"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    options={options}
                />
            </div>
            <div ref={scopeRef} style={{ position: 'relative' }}>
                <SelectComponent
                    unsafe_scope={scopeRef}
                    view="default"
                    size="m"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    options={options}
                />
            </div>
            <div ref={scopeRef} style={{ position: 'relative' }}>
                <SelectComponent
                    unsafe_scope={scopeRef}
                    view="default"
                    size="m"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    options={options}
                />
            </div>
        </ButtonGroup>
    );
};
