import React from 'react';
import { Button } from '@yandex-lego/components/next/Button/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    body {
        font-family: Helvetica, Arial, sans-serif;
    }

    .container {
        display: inline-flex;
        padding: 16px;
        background-color: #fcc;
    }
`;

export const ViewHermioneCase = () => {
    const { disabled = false, view = 'default' } = useParams();

    return (
        <>
            <style>{styles}</style>
            <div className="container" data-testid="container">
                <Button disabled={disabled} view={view} size="s" data-testid="button">
                    Button
                </Button>
                <Button disabled={disabled} view={view} size="m">
                    Button
                </Button>
                <Button disabled={disabled} view={view} size="l">
                    Button
                </Button>
            </div>
        </>
    );
};
