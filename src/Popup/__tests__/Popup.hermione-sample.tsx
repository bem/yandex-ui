import React from 'react';
import { render } from 'react-dom';

import '@yandex-lego/components/internal/polyfills/common';
import { parseQueryString } from '@yandex-lego/components/internal/utils/parseQueryString';
import { ThemeProvider } from '@yandex-lego/components/internal/components/ThemeProvider';

import { FlippingHermioneCase } from './scenarios/flipping';
import { DirectionsHermioneCase } from './scenarios/directions';
import { OverflowHermioneCase } from './scenarios/overflow';
import { ScaleHermioneCase } from './scenarios/scale';
import { BoundaryHermioneCase } from './scenarios/boundary';

const { scenario, tokens, ...props } = parseQueryString(window.location.search);

function getHermioneCase(scenario: string, props: any) {
    switch (scenario) {
        case 'flipping':
            return <FlippingHermioneCase {...props} />;
        case 'directions':
            return <DirectionsHermioneCase {...props} />;
        case 'overflow':
            return <OverflowHermioneCase {...props} />;
        case 'scale':
            return <ScaleHermioneCase {...props} />;
        case 'boundary':
            return <BoundaryHermioneCase {...props} />;
        default:
            return <div>{scenario} not found</div>;
    }
}

render(
    <ThemeProvider theme={tokens}>{getHermioneCase(scenario, props)}</ThemeProvider>,
    document.getElementById('root'),
);
