import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface IssuesProps {
    queue: string;
    status?: string;
    components?: string;
    tags?: string;
    sortBy?: string;
}

export const Issues: FC<IssuesProps> = (props) => {
    return <Frame src={getIssuesUrl(props)} />;
};

const Frame = styled.iframe`
    width: 100%;
    height: 100%;

    border: none;
`;

function getIssuesUrl(props: IssuesProps) {
    const { queue, status, components, tags, sortBy = 'Created DESC' } = props;

    const filter: Record<string, string> = {
        Queue: queue,
        Status: status,
        Components: components,
        Tags: tags,
        'Sort by': sortBy,
    };

    const query = Object.keys(filter)
        .reduce<string[]>((acc, key) => {
            if (typeof filter[key] !== 'undefined') {
                acc.push(`"${key}": ${filter[key]}`);
            }

            return acc;
        }, [])
        .join(' ');

    return `https://feature-requests.yandex-team.ru#query=${encodeURIComponent(query)}`;
}
