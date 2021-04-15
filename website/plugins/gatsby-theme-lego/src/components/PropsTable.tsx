import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { Table, Link } from './Typography';

type Prop = {
    name: string;
    optional: boolean;
    type: string;
    defaultValue?: string;
    description?: string;
}

type PropsTableProps = {
    props: Prop[];
}

export const PropsTable: FC<PropsTableProps> = ({ props }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Свойство</th>
                    <th>Тип</th>
                    <th>По умолчанию</th>
                    <th>Описание</th>
                </tr>
            </thead>
            <tbody>
                {props.map(({ name, optional, type, defaultValue, description }, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {name}
                                {optional && '?'}
                            </td>
                            <td>
                                <code>{type}</code>
                            </td>
                            <td>{defaultValue ? <code>{defaultValue}</code> : '-'}</td>
                            <td>
                                <ReactMarkdown renderers={{ link: Link }}>{description}</ReactMarkdown>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
