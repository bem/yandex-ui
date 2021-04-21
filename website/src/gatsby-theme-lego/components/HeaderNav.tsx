import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

export const HeaderNav = styled.nav`
    display: flex;
    flex-shrink: 0;
`;

export type HeaderNavItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
};

export const HeaderNavItem = forwardRef<HTMLAnchorElement, HeaderNavItemProps>((props, ref) => {
    const { children, active, ...other } = props;

    return (
        <HeaderNavItemStyled ref={ref} data-active={active} {...other}>
            {children}
        </HeaderNavItemStyled>
    );
});

const HeaderNavItemStyled = styled.a<HeaderNavItemProps>`
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
