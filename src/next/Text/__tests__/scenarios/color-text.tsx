import React from 'react';
import { Text } from '@yandex-lego/components/next/Text/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    [data-testid=container] {
        border: 1px solid #000;
    }
`;

const colors = [
    'primary',
    'brand',
    'inverse',
    'promo',
    'secondary',
    'ghost',
    'disable',
    'warning',
    'success',
    'alert',
    'link',
    'link-external',
    'link-minor',
    'link-hover',
    'control-primary',
    'control-secondary',
    'control-passive',
    'control-ghost',
    'control-faint',
    'control-disable',
    'control-link',
    'control-error',
] as const;

export const ColorTextHermioneCase = () => {
    const { as, weight, typography = 'body-long-l', align, maxLines, overflow } = useParams();

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                {colors.map((color) => {
                    const isInverse = color === 'inverse' || color === 'control-faint';

                    return (
                        <Text
                            key={color}
                            as={as}
                            weight={weight}
                            typography={typography}
                            color={color}
                            align={align}
                            maxLines={maxLines}
                            overflow={overflow}
                            style={{ backgroundColor: isInverse ? '#000' : undefined }}
                        >
                            {`color="${color}"`}
                        </Text>
                    );
                })}
            </div>
        </>
    );
};
