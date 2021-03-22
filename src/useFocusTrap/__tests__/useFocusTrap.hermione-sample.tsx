import React from 'react';
import { render } from 'react-dom';
import { parseQueryString } from '@yandex-lego/components/internal/utils/parseQueryString';

import { DefaultHermioneCase } from './scenarios/default';
import { AutofocusHermioneCase } from './scenarios/autofocus';
import { OrderHermioneCase } from './scenarios/order';

const { scenario, ...props } = parseQueryString(window.location.search);

function getHermioneCase(scenario: string, props: any) {
    switch (scenario) {
        case 'default':
            return <DefaultHermioneCase {...props} />;

        case 'autofocus':
            return <AutofocusHermioneCase {...props} />;

        case 'order':
            return <OrderHermioneCase {...props} />;

        default:
            return <div>{scenario} not found</div>;
    }
}

render(getHermioneCase(scenario, props), document.getElementById('root'));
