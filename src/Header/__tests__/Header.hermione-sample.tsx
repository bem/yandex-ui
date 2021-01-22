import React from 'react';
import { render } from 'react-dom';

import { parseQueryString } from '@yandex-lego/components/internal/utils/parseQueryString';
import { ThemeProvider } from '@yandex-lego/components/internal/components/ThemeProvider';

import { DefaultHermioneCase } from './scenarios/default';
import { TabsHermioneCase } from './scenarios/tabs';
import { LogoHermioneCase } from './scenarios/logo';
import { SearchHermioneCase } from './scenarios/search';

const { scenario, tokens, ...props } = parseQueryString(window.location.search);

function getHermioneCase(scenario: string, props: any) {
    switch (scenario) {
        case 'default':
            return <DefaultHermioneCase {...props} />;
        case 'tabs':
            return <TabsHermioneCase {...props} />;
        case 'logo':
            return <LogoHermioneCase {...props} />;
        case 'search':
            return <SearchHermioneCase {...props} />;
        default:
            return <div>{scenario} not found</div>;
    }
}

render(
    <ThemeProvider theme={tokens}>{getHermioneCase(scenario, props)}</ThemeProvider>,
    document.getElementById('root'),
);
