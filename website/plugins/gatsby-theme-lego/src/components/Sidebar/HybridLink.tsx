import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from '@yandex-lego/components/Link';
import { Link as GatsbyLink } from 'gatsby';

type HybridLinkProps = {
    href: string;
    active: boolean;
    disabled?: boolean;
};

export const HybridLink: FC<HybridLinkProps> = (props) => {
    const { href, active, disabled, children } = props;

    if (href.match(/http/)) {
        return (
            <StyledLink disabled={disabled} active={active ? 1 : 0} href={href} as={Link}>
                {children}
            </StyledLink>
        );
    }

    return (
        <StyledLink disabled={disabled} active={active ? 1 : 0} to={href} as={GatsbyLink}>
            {children}
        </StyledLink>
    );
};

const StyledLink = styled.a<any>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 7px 12px 7px 20px;

    font-family: var(--typography-font-family);
    font-size: var(--text-control-size-s-font-size);
    line-height: var(--text-control-size-s-line-height);
    letter-spacing: var(--text-control-size-s-letter-spacing);
    user-select: none;
    text-decoration: none;

    color: rgba(0, 0, 0, 0.85);
    border-radius: 4px;
    outline: 0;

    ${(props) =>
        props.disabled &&
        css`
            color: rgba(0, 0, 0, 0.3);
            pointer-events: none;
        `}

    ${(props) =>
        props.active
            ? css`
                  background-color: rgba(0, 0, 0, 0.05);
              `
            : css`
                  &:hover {
                      background-color: rgba(0, 0, 0, 0.025);
                  }
              `}
`;
