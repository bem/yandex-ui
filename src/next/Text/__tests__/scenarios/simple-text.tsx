import React from 'react';
import { Text } from '@yandex-lego/components/next/Text/desktop/bundle';
import { useParams } from '@yandex-lego/components/internal/utils/parseQueryString';

const styles = `
    [data-testid=container] {
        border: 1px solid #000;
    }
`;

export const SimpleTextHermioneCase = () => {
    const {
        paragraph = false,
        as,
        weight,
        typography = 'body-long-l',
        color,
        align,
        maxLines,
        overflow,
        width,
    } = useParams();
    const tag = as ?? (paragraph ? 'p' : 'span');

    const content = paragraph
        ? 'Наша главная цель — создавать качественные сервисы для миллионов пользователей интернета, ' +
          'и это отражено во внутренних документах Яндекса. Важно, чтобы к достижению этой цели стремился каждый ' +
          'член команды Яндекс ожидает, что члены команды будут чувствовать ответственность не только за свою ' +
          'часть работы, но и за продукт в целом. Будьте неравнодушны к отзывам пользователей, предлагайте ' +
          'усовершенствования.'
        : 'Миссия Яндекса — помогать людям решать задачи и достигать своих целей в жизни.';

    const isInverse = color === 'inverse' || color === 'control-faint';

    return (
        <>
            <style>{styles}</style>
            <div data-testid="container" style={{ width, backgroundColor: isInverse ? '#000' : undefined }}>
                <Text
                    as={tag}
                    weight={weight}
                    typography={typography}
                    color={color}
                    align={align}
                    maxLines={maxLines}
                    overflow={overflow}
                >
                    {content}
                </Text>
            </div>
        </>
    );
};
