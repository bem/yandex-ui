import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';

import { Flex, Spacer } from '../../../plugins/gatsby-theme-lego/src/components/Flex';
import { SlackIcon, MailIcon } from '../../icons';

export const Footer: FC = () => (
    <Flex alignItems="center" as={Container}>
        Если у вас возникли проблемы или вопросы, напишите нам.
        <Spacer />
        <Flex gap="24px">
            <Flex gap="4px">
                <SlackIcon />
                <span>
                    <Link theme="normal" target="_blank" href="https://lego-team.slack.com">
                        Slack
                    </Link>{' '}
                    канал Support
                </span>
            </Flex>
            <Flex gap="4px">
                <MailIcon />
                <span>
                    Общая рассылка{' '}
                    <Link theme="normal" target="_blank" href="mailto:lego@yandex-team.ru">
                        lego@
                    </Link>
                </span>
            </Flex>
        </Flex>
    </Flex>
);

const Container = styled.div`
    grid-area: footer;

    height: 56px;
    padding: 0 60px;

    font-family: var(--typography-font-family);
    font-size: 12px;
    line-height: 14px;

    color: #000;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
`;
