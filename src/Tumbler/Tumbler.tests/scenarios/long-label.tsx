import React from 'react';

import { Tumbler } from '@yandex-lego/components/Tumbler/desktop/bundle';

const styles = `
    .container {
        display: inline-flex;
        width: 200px;
    }
`;

export const LongLabelHermioneCase = () => (
    <>
        <style>{styles}</style>
        <div className="container" data-testid="container">
            <Tumbler
                size="m"
                view="default"
                checked={false}
                onChange={() => null}
                labelAfter="Very very very very long label"
            />
        </div>
    </>
);
