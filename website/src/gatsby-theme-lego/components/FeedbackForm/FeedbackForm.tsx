import React, { FC, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { RatingForm } from './RatingForm';
import { InputForm } from './InputForm';
import { HiddenForm } from './HiddenForm';
import { Thanks } from './Thanks';

type FeedbackFormProps = { slug: string };

export const FeedbackForm: FC<FeedbackFormProps> = (props) => {
    const { slug } = props;

    const formRef = useRef<HTMLFormElement>(null);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isRatingForm, setRatingForm] = useState(true);
    const [isRatingSubmitted, setRatingSubmitted] = useState(false);
    const [isInputSubmitted, setInputSubmitted] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    useEffect(() => {
        if (!isRatingSubmitted) {
            return;
        }

        if (rating < 5) {
            setRatingForm(false);
        } else {
            setSuccess(true);
            formRef.current.submit();
        }
    }, [isRatingSubmitted, rating]);

    useEffect(() => {
        if (isInputSubmitted) {
            setSuccess(true);
            formRef.current.submit();
        }
    }, [isInputSubmitted]);

    let content = null;

    if (isRatingForm) {
        content = <RatingForm rating={rating} setRating={setRating} onSubmit={() => setRatingSubmitted(true)} />;
    } else {
        content = <InputForm feedback={feedback} setFeedback={setFeedback} onSubmit={() => setInputSubmitted(true)} />;
    }

    if (isSuccess) {
        content = <Thanks />;
    }

    return (
        <Container>
            {content}
            <HiddenForm formRef={formRef} slug={slug} rating={rating} feedback={feedback} />
        </Container>
    );
};

const Container = styled.div`
    padding: 32px 80px;
    display: flex;
    align-items: center;
    grid-area: feedback;
`;
