import React from 'react';
import { render } from 'react-dom';
import { parseQueryString } from '@yandex-lego/components/internal/utils/parseQueryString';

import { UnmountHermioneCase } from './scenarios/unmount';

const { scenario, ...props } = parseQueryString(window.location.search);

function getHermioneCase(scenario: string, props: any) {
    switch (scenario) {
        case 'unmount':
            return <UnmountHermioneCase {...props} />;

        default:
            return <div>{scenario} not found</div>;
    }
}

render(getHermioneCase(scenario, props), document.getElementById('root'));
