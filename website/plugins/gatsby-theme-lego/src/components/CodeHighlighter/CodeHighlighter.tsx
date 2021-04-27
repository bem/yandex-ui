import React, { FC } from 'react';
import styled from '@emotion/styled';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';

import { theme } from './theme';
import { CopyButton } from './CopyButton';

type CodeHighlighterType = {
    className: string;
    children: string;
};

export const CodeHighlighter: FC<CodeHighlighterType> = (props) => {
    const { children, className } = props;

    const copySource = () => {
        copy(children);
    };

    const matchedLang = className.match(/language-(.+)/);
    const language = (matchedLang ? matchedLang[1] : '') as Language;

    return (
        <Container>
            <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <Pre style={style}>
                        {tokens.map((line, key1) => (
                            <div key={key1} {...getLineProps({ line, key: key1 })}>
                                {line.map((token, key2) => (
                                    <span key={key2} {...getTokenProps({ token, key: key2 })} />
                                ))}
                            </div>
                        ))}
                    </Pre>
                )}
            </Highlight>
            <CopyButton onClick={copySource} />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const Pre = styled.pre`
    overflow-y: scroll;
    overflow-x: auto;

    max-height: 360px;
    margin: 0;
    padding: 12px 20px;

    font-family: Menlo, monospace;
    font-size: 12px;
    line-height: 18px;
    white-space: pre;
    word-spacing: normal;
    word-wrap: normal;
    word-break: normal;
    tab-size: 4;

    border-radius: 4px;
    overflow-wrap: normal;
`;
