import React from 'react';
import { Button } from '@yandex-lego/components/next/Button/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

export const Perf = () => {
    const { count = 1 } = useParams();

    return (
        <>
            {Array.from({ length: count }).map((_, idx) => (
                <Button key={idx} view="default" size="s">
                    Button
                </Button>
            ))}
        </>
    );
};
