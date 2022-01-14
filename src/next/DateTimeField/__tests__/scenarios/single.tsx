import React from 'react';
import { Provider } from '@yandex-lego/components/Provider';
import { DateTimeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .container {
        display: inline-flex;
        padding: 16px;
        align-items: center;
    }
`;

const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
};

export const SingleHermioneCase = () => {
    const { disabled = false, size = 's', view = 'default' } = useParams();

    return (
        <Provider locale="ru-RU">
            <style>{styles}</style>
            <div className="container" data-testid="container">
                <DateTimeField
                    disabled={disabled}
                    view={view}
                    size={size}
                    formatOptions={formatOptions}
                    data-testid="datetimefield"
                    placeholder={new Date(2021, 0, 1)}
                />
            </div>
        </Provider>
    );
};
