import React from 'react';
import { select, boolean, radios, text } from '@storybook/addon-knobs';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Spin } from '@yandex-lego/components/Spin/bundle';
import { Progress } from '@yandex-lego/components/Progress';
import { MessageBox, Wrapper } from '@yandex-lego/components/MessageBox/desktop/bundle';

const addonOptions = {
    empty: '',
    text: 'text',
    icon: 'icon',
};

const backgroundOptions = {
    empty: '',
    image: 'image',
    progress: 'progress',
};

const backgroundOptionToJsx = {
    empty: '',
    image: (
        <picture>
            <img
                style={{ filter: 'opacity(.5)', width: '100%' }}
                src="//jing.yandex-team.ru/files/axaxaman/catalogue-banner-x3.jpeg"
            />
        </picture>
    ),
    progress: <Progress style={{ height: '100%', backgroundColor: '#2196f3' }} value={0.65} />,
};

export const Playground = () => {
    const children = text('children', 'MessageBox-Content');
    const size = select('size', ['s', 'm', 'l'], 's') as any;
    const opaque = boolean('opaque', false);
    const actionClear = boolean('with clear button', false);
    const action = boolean('with action button', false);
    const hasClose = boolean('has close', false);

    const leadingRadio = radios('leading', addonOptions, null);
    const leading = leadingRadio === 'icon' ? <Spin view="default" size="s" progress /> : leadingRadio;
    const trailingRadio = radios('trailing', addonOptions, null);
    const trailing = trailingRadio === 'icon' ? <Spin view="default" size="s" progress /> : trailingRadio;
    const backgroundRadio = radios('background', backgroundOptions, 'empty');
    const background = (backgroundOptionToJsx as any)[backgroundRadio];

    const view = select('view', ['default', 'promo', 'inverse'], 'default') as any;
    const align = select('align', ['left', 'right', 'center'], 'left');
    let layout = select('layout', ['tooltip', 'plain', 'functional'], 'tooltip');
    if (hasClose && layout === 'tooltip') {
        layout = 'plain';
    }

    return (
        <div style={{ padding: '50px', backgroundColor: 'var(--color-bg-default)' }}>
            <MessageBox
                view={view}
                size={size}
                opaque={opaque}
                layout={layout}
                onClose={(hasClose as any) && (() => null)}
                background={background}
                actions={
                    <>
                        {actionClear && (
                            <Button size={size} view="clear">
                                Cancel
                            </Button>
                        )}
                        {action && (
                            <Button size={size} view="action">
                                Done
                            </Button>
                        )}
                    </>
                }
            >
                <Wrapper leading={leading} trailing={trailing} align={align}>
                    {children}
                </Wrapper>
            </MessageBox>
        </div>
    );
};
