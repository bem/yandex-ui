import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Text } from '@yandex-lego/components/Text/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

import { Rating } from './Rating';
import { FeedbackIllustration } from './FeedbackIllustration';

type RatingFormProps = {
    rating: number;
    setRating: (rating: number) => void;
    onSubmit: () => void
};

export const RatingForm: FC<RatingFormProps> = (props) => {
    const { rating, setRating, onSubmit } = props;

    return (
        <Container>
            <FeedbackIllustration />
            <Text typography="body-short-xl" weight="bold">
                Как вы оцениваете качество документации?
            </Text>
            <Rating value={rating} onChange={setRating} />
            {rating > 0 && (
                <Button size="m" view="default" onClick={() => onSubmit()}>
                    Отправить
                </Button>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;

    .Text {
        margin-right: 24px;
        margin-left: 12px;
    }

    .Button2 {
        margin-left: 24px;
    }
`;
