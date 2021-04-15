import React, { FC } from 'react';
import styled from '@emotion/styled';

type FlexProps = {
    direction?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
    as?: any;
};

// TODO: add fallback for safari (╯°□°)╯︵ ┻━┻
export const Flex: FC<FlexProps> = (props) => {
    const { children, gap, direction, justifyContent, alignItems, as } = props;

    return (
        <Container as={as} gap={gap} direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
            {children}
        </Container>
    );
};

export const Spacer = styled.div`
    flex: 1 1 auto;
`;

const Container = styled.div<any>`
    display: flex;
    gap: ${(props) => props.gap};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`;
