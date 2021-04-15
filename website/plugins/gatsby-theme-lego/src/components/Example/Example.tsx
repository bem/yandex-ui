import React, { ComponentType, FC, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

import { LegoThemeProvider } from '../LegoThemeProvider';
import { CodeHighlighter } from '../CodeHighlighter';
import { CodeIcon, CodeSandboxIcon, BackgroundIcon } from '../../icons';
import { createCodeSandbox } from './utils';

type ExampleProps = {
    component: ComponentType;
    source?: string;
    height?: number;
};

export const Example: FC<ExampleProps> = (props) => {
    const { component: ExampleComponent, source, height = 'auto' } = props;
    const [isVisibleSource, setVisibleSource] = useState(false);
    const [isTransparent, setTransparent] = useState(true);

    const toggleSourceVisible = () => {
        setVisibleSource(!isVisibleSource);
    };

    const toggleBackground = () => {
        setTransparent(!isTransparent);
    };

    const openCodeSandbox = () => {
        createCodeSandbox(source);
    };

    return (
        <Container>
            <Header>
                {source && (
                    <Button view="clear" size="s" data-analytics="button-codesandbox" onClick={openCodeSandbox}>
                        <CodeSandboxIcon />
                    </Button>
                )}
                {source && (
                    <Button view="clear" size="s" data-analytics="button-example-code" onClick={toggleSourceVisible}>
                        <CodeIcon />
                    </Button>
                )}
                <Button view="clear" size="s" onClick={toggleBackground}>
                    <BackgroundIcon />
                </Button>
            </Header>
            <Canvas style={{ height }} transparent={isTransparent}>
                <LegoThemeProvider>
                    <ExampleComponent />
                </LegoThemeProvider>
            </Canvas>
            {isVisibleSource && (
                <SourceContainer>
                    <CodeHighlighter className="language-ts">{source}</CodeHighlighter>
                </SourceContainer>
            )}
        </Container>
    );
};

const Container = styled.div`
    position: relative;

    overflow: hidden;

    box-sizing: border-box;
    margin: 24px 0;

    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 0px 0px 0.5px rgba(0, 44, 94, 0.1), 0px 4px 8px -2px rgba(0, 44, 94, 0.15);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 52px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background-color: #fff;

    /* FIXME: Должно работать из коробки. */
    .Button2-Text {
        display: flex;
    }
`;

const Canvas = styled.div<any>`
    padding: 24px;

    background-color: #fff;
    background-position: 0 0, 10px 0, 10px -10px, 0 10px;
    background-size: 20px 20px;

    ${(props) =>
        props.transparent &&
        css`
            background-image: linear-gradient(45deg, rgb(249, 249, 250) 25%, transparent 25%),
                linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
                linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
        `}
`;

const SourceContainer = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    & pre {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;
