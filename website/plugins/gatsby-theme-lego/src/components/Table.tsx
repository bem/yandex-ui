import styled from '@emotion/styled';

export const Table = styled.table`
    border-spacing: 0;
    border-collapse: collapse;
    font-family: var(--typography-font-family);
    font-size: var(--text-body-short-size-m-font-size);
    line-height: var(--text-body-short-size-m-line-height);
    letter-spacing: var(--text-body-short-size-m-letter-spacing);
    border: none;
`;

export const Th = styled.th`
    background-color: #f7f8fa;
    padding: 12px;
    text-align: left;
`;

export const Td = styled.td`
    padding: 12px;
    text-align: left;
    vertical-align: baseline;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
