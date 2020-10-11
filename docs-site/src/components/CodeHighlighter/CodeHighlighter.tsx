import React, { FC, useCallback } from 'react';
/* eslint-disable-next-line */
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
/* eslint-disable-next-line */
import copy from 'copy-to-clipboard';

import { theme } from './theme';
import { CopyButton } from './CopyButton/CopyButton';
import styles from './CodeHighlighter.module.css';

type CodeHighlighterType = {
    className: string;
    children: string;
};

export const CodeHighlighter: FC<CodeHighlighterType> = ({ children, className }) => {
    const onCopyClick = useCallback(() => {
        copy(children);
    }, [children]);

    const matchedLang = className.match(/language-(.+)/);
    const language = (matchedLang ? matchedLang[1] : '') as Language;

    return (
        <div className={styles.CodeHighlighter}>
            <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={styles.Pre} style={style}>
                        {tokens.map((line, key1) => (
                            <div key={key1} {...getLineProps({ line, key: key1 })}>
                                {line.map((token, key2) => (
                                    <span key={key2} {...getTokenProps({ token, key: key2 })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
            <CopyButton onClick={onCopyClick} />
        </div>
    );
};
