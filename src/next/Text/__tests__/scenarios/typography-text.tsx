import React from 'react';
import { Text } from '@yandex-lego/components/next/Text/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    [data-testid=container] {
        border: 1px solid #000;
    }
`;

const typographyValues = [
    'display-xl',
    'display-l',
    'display-m',
    'display-s',
    'headline-xl',
    'headline-l',
    'headline-m',
    'headline-s',
    'headline-xs',
    'subheader-xl',
    'subheader-l',
    'subheader-m',
    'subheader-s',
    'body-long-xl',
    'body-long-l',
    'body-long-m',
    'body-long-s',
    'body-short-xl',
    'body-short-l',
    'body-short-m',
    'body-short-s',
    'caption-xl',
    'caption-l',
    'caption-m',
    'overline-l',
    'overline-m',
    'overline-s',
    'control-xxl',
    'control-xl',
    'control-l',
    'control-m',
    'control-s',
    'control-xs',
    'control-xxs',
] as const;

export const TypographyTextHermioneCase = () => {
    const { as, weight, color, align, maxLines, overflow } = useParams();
    const isInverse = color === 'inverse' || color === 'control-faint';

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container">
                {typographyValues.map((typography) => {
                    return (
                        <Text
                            key={typography}
                            as={as}
                            weight={weight}
                            typography={typography}
                            color={color}
                            align={align}
                            maxLines={maxLines}
                            overflow={overflow}
                            style={{ backgroundColor: isInverse ? '#000' : undefined }}
                        >
                            {`typography="${typography}"`}
                        </Text>
                    );
                })}
            </div>
        </>
    );
};
