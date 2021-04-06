import React from 'react';
import { render } from 'react-dom';
import { parseQueryString } from '@yandex-lego/components/internal/utils/parseQueryString';
import { ThemeProvider } from '@yandex-lego/components/internal/components/ThemeProvider';
import { LocaleProvider } from '@yandex-lego/components/i18n';

import { ComplexDayHermioneCase } from './scenarios/complex-day';
import { ComplexMonthHermioneCase } from './scenarios/complex-month';
import { ComplexRangeHermioneCase } from './scenarios/complex-range';
import { ComplexYearHermioneCase } from './scenarios/complex-year';

const { scenario, ...props } = parseQueryString(window.location.search);

function getHermioneCase(scenario: string, props: any) {
    switch (scenario) {
        case 'complex-day':
            return <ComplexDayHermioneCase {...props} />;
        case 'complex-month':
            return <ComplexMonthHermioneCase {...props} />;
        case 'complex-range':
            return <ComplexRangeHermioneCase {...props} />;
        case 'complex-year':
            return <ComplexYearHermioneCase {...props} />;
        default:
            return <div>{scenario} not found</div>;
    }
}

render(
    <LocaleProvider locale="ru-RU">
        <ThemeProvider>{getHermioneCase(scenario, props)}</ThemeProvider>
    </LocaleProvider>,
    document.getElementById('root'),
);
