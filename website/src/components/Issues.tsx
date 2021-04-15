import React, { FC } from 'react';
import styled from '@emotion/styled';

export interface IssuesProps {
    componentId: string;
}

export const Issues: FC<IssuesProps> = (props) => {
    const { componentId } = props;

    return <Frame src={getIssuesUrl(componentId)} />;
};

const Frame = styled.iframe`
    width: 100%;
    height: 100%;

    border: none;
`;

function getIssuesUrl(componentId: string) {
    const filter: Record<string, string> = {
        Queue: 'ISL',
        Status: 'inScope, inProgress, inReview',
        Components: 'lego-components',
        Tags: componentId,
        'Sort by': 'Created DESC',
    };

    const query = Object.keys(filter)
        .reduce<string[]>((acc, key) => {
            acc.push(`"${key}": ${filter[key]}`);

            return acc;
        }, [])
        .join(' ');

    return `https://feature-requests.yandex-team.ru#query=${encodeURIComponent(query)}`;
}
