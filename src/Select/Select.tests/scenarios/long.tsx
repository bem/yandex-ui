import React, { FC, useState } from 'react';
import { Select } from '@yandex-lego/components/Select/desktop/bundle';

const options: any = [];

for (let idx = 0; idx < 40; idx++) {
    options.push({ value: idx, content: idx });
}

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .container {
        display: inline-flex;
        background-color: #fcc;
        height: 100vh;
        width: 300px;
    }
`;

export const LongHermioneCase: FC<any> = (props) => {
    const { maxHeight } = props;
    const [value, setValue] = useState(0);

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container" className="container">
                <Select
                    view="default"
                    size="m"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    options={options}
                    maxHeight={maxHeight}
                    placeholder="Select option"
                    showAlwaysPlaceholder
                />
            </div>
        </>
    );
};
