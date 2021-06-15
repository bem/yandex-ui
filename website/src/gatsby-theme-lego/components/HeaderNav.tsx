import React, { ReactNode, forwardRef } from 'react';
import styled from '@emotion/styled';
import { Link as LegoLink } from '@yandex-lego/components/Link';
import { Link as GatsbyLink } from 'gatsby';

export const HeaderNav = styled.nav`
    display: flex;
    flex-shrink: 0;
`;

export type HeaderNavItemProps = {
    active?: boolean;
    children: ReactNode;
    href: string;
};

export const HeaderNavItem = forwardRef<HTMLAnchorElement, HeaderNavItemProps>((props, ref) => {
    const { children, active, href } = props;
    let linkProps = {};

    if (href.match(/http/)) {
        linkProps = { href, as: LegoLink, target: '_blank' };
    } else {
        linkProps = { to: href, as: GatsbyLink };
    }

    return (
        <Container ref={ref} data-active={active} {...linkProps}>
            {children}
        </Container>
    );
});

const Container = styled.a`
    display: inline-flex;
    box-sizing: border-box;
    font-family: var(--typography-font-family);
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    white-space: nowrap;
    outline: 0;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transition: all 100ms ease;
    color: #2f2d33;

    &:hover,
    &[data-active='true'] {
        color: #f20008;
    }

    & + & {
        margin-left: 26px;
    }
`;
