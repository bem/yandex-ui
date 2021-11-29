import React, { ComponentType, FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle';
import ReactMarkdown from 'react-markdown';

import { CodeIcon, CodeSandboxIcon, BackgroundIcon } from '../../icons';
import { fork } from '../../libs/fork';
import { LegoThemeProvider } from '../LegoThemeProvider';
import { CodeHighlighter } from '../CodeHighlighter';
import { InlineCode } from '../InlineCode';
import { createCodeSandbox } from './utils';
import { H4 } from '../Typography';
import { components } from '../MDXLayoutProvider';
import { usePageContext } from '../PageContextProvider';

type ExampleProps = {
    component: ComponentType;
    source?: string;
    height?: number;
    children?: ReactNode;
    defaultBackground?: 'white' | 'gray';
};

const Tooltip = fork(TooltipStateful, {
    view: 'default',
    trigger: ['focus', 'hover'],
    size: 's',
    scope: 'inplace',
    direction: 'top',
    hasTail: true,
});

export const Example: FC<ExampleProps> = (props) => {
    const { children, component: ExampleComponent, source, height = 'auto', defaultBackground = 'gray' } = props;
    const [isVisibleSource, setVisibleSource] = useState(false);
    const [background, setBackground] = useState<'white' | 'gray'>(defaultBackground);
    const { frontmatter } = usePageContext();
    const componentId = frontmatter?.id;
    // TODO: Удалить (включая контекст), после того, как все примеры будут корректно выравнены.
    const alignExampleByCenter = ['Button', 'Popup', 'Calendar', 'DateTimeField', 'DatePicker'].includes(componentId);

    const toggleSourceVisible = () => {
        setVisibleSource(!isVisibleSource);
    };

    const toggleBackground = () => {
        setBackground(background === 'gray' ? 'white' : 'gray');
    };

    const openCodeSandbox = () => {
        createCodeSandbox(source);
    };

    return (
        <Container>
            <Canvas style={{ height }} data-background={background}>
                <LegoThemeProvider>
                    {alignExampleByCenter ? (
                        <Aligner>
                            <ExampleComponent />
                        </Aligner>
                    ) : (
                        <ExampleComponent />
                    )}
                </LegoThemeProvider>
            </Canvas>
            {children && <DescriptionContainer>{children}</DescriptionContainer>}
            <Toolbar>
                {source && (
                    <Tooltip content="Открыть пример в CodeSandbox">
                        <Button view="clear" size="s" data-analytics="button-codesandbox" onClick={openCodeSandbox}>
                            <CodeSandboxIcon />
                        </Button>
                    </Tooltip>
                )}
                {source && (
                    <Tooltip content={`${isVisibleSource ? 'Скрыть' : 'Показать'} код примера`}>
                        <Button
                            view="clear"
                            size="s"
                            data-analytics="button-example-code"
                            onClick={toggleSourceVisible}
                        >
                            <CodeIcon />
                        </Button>
                    </Tooltip>
                )}
                <Tooltip content="Переключить фон">
                    <Button view="clear" size="s" onClick={toggleBackground}>
                        <BackgroundIcon />
                    </Button>
                </Tooltip>
            </Toolbar>

            {isVisibleSource && (
                <SourceContainer>
                    <CodeHighlighter className="language-tsx">{source}</CodeHighlighter>
                </SourceContainer>
            )}
        </Container>
    );
};

export const Title: FC = (props) => {
    const { children } = props;

    return <H4>{children}</H4>;
};
export const Description: FC<{ children: string }> = (props) => {
    const { children } = props;
    const renderers = { ...components, code: InlineCode };

    return <ReactMarkdown components={renderers}>{children}</ReactMarkdown>;
};

const Container = styled.div`
    position: relative;

    overflow: hidden;

    box-sizing: border-box;
    margin: 12px 0 32px;

    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 0px 0px 0.5px rgba(0, 44, 94, 0.1), 0px 4px 8px -2px rgba(0, 44, 94, 0.15);
`;

const Toolbar = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 52px;

    border-top: 1px solid rgba(0, 0, 0, 0.05);

    /* FIXME: Должно работать из коробки. */
    .Button2-Text {
        display: flex;
    }

    --popup-view-default-typo-color: #fff;
    --tooltip-view-default-fill-color-base: #000;
`;

const Canvas = styled.div<any>`
    padding: 24px 16px;

    background-position: 0 0, 10px 0, 10px -10px, 0 10px;
    background-size: 20px 20px;

    &[data-background='white'] {
        background-color: #fff;
    }

    &[data-background='gray'] {
        background-color: #f7f8fa;
    }

    &[data-background='transparent'] {
        background-image: linear-gradient(45deg, rgb(249, 249, 250) 25%, transparent 25%),
            linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
            linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
    }
`;

const SourceContainer = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    & pre {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;

const DescriptionContainer = styled.section`
    padding: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);

    & p {
        margin-bottom: 0;
    }
`;

const Aligner = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
