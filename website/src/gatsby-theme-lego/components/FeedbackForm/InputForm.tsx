import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Text } from '@yandex-lego/components/Text/bundle';
import { TextareaWithAutoResize as Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

type InputFormProps = {
    feedback: string;
    setFeedback: (feedback: string) => void;
    onSubmit: () => void;
};

export const InputForm: FC<InputFormProps> = (props) => {
    const { feedback, setFeedback, onSubmit } = props;

    return (
        <Container>
            <Text typography="body-short-xl" weight="bold" className="Heading">
                Как вы оцениваете качество документации?
            </Text>
            <Text typography="body-short-s" className="Label">
                Как можно улучшить эту статью?
            </Text>
            <Textarea
                autoFocus
                view="default"
                size="s"
                placeholder="Поделитесь своим мнением..."
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                rows={4}
            />
            <Button size="m" view="default" onClick={() => onSubmit()}>
                Отправить
            </Button>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .Label {
        margin-bottom: 8px;
    }

    .Textarea,
    .Heading {
        margin-bottom: 16px;
    }
`;
