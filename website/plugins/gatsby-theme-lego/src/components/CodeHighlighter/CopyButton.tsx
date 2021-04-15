import React, { FC, MouseEventHandler, MouseEvent, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

import { CopyIcon } from '../../icons';

type CopyButtonProps = {
    onClick: MouseEventHandler;
};

const TEXT_REVERSE_DURATION = 2000;

export const CopyButton: FC<CopyButtonProps> = (props) => {
    const { onClick } = props;
    const [copyText, setCopyText] = useState('Скопировать');

    const setCopedText = (event: MouseEvent) => {
        setCopyText('Скопировано');
        onClick(event);
        setTimeout(() => setCopyText('Скопировать'), TEXT_REVERSE_DURATION);
    };

    return (
        <Button view="clear" size="s" data-analytics="button-copy" as={StyledButton} onClick={setCopedText}>
            {copyText}
            <CopyIcon />
        </Button>
    );
};

const StyledButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    & .Button2-Text {
        display: flex;
        align-items: center;
    }

    & svg {
        margin-left: 4px;
    }
`;
