import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../libs/fork';
import { Link } from './Typography';
import { Table, Th, Td } from './Table';
import { InlineCode } from './InlineCode';

const Title = fork(Text, {
    as: 'span',
    typography: 'overline-l',
    color: 'secondary',
    style: { whiteSpace: 'nowrap' },
});

const Paragraph = fork(Text, {
    as: 'span',
    typography: 'body-short-m',
    color: 'primary',
});

const markdownComponents = { link: Link, paragraph: Paragraph, inlineCode: InlineCode };

type Prop = {
    name: string;
    optional: boolean;
    type: string;
    defaultValue?: string;
    description?: string;
};

type PropsTableProps = {
    props: Prop[];
};

export const PropsTable: FC<PropsTableProps> = ({ props }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>
                        <Title>Свойство</Title>
                    </Th>
                    <Th>
                        <Title>Описание</Title>
                    </Th>
                    <Th>
                        <Title>Тип</Title>
                    </Th>
                    <Th>
                        <Title>По умолчанию</Title>
                    </Th>
                </tr>
            </thead>
            <tbody>
                {props.map(({ name, optional, type, defaultValue, description }, index) => {
                    return (
                        <tr key={index}>
                            <Td>
                                {name}
                                {optional && '?'}
                            </Td>
                            <Td>
                                <ReactMarkdown renderers={markdownComponents}>{description}</ReactMarkdown>
                            </Td>
                            <Td>
                                <InlineCode>{type}</InlineCode>
                            </Td>
                            <Td>{defaultValue ? <InlineCode>{defaultValue}</InlineCode> : '—'}</Td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
