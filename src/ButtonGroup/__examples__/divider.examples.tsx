import React from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Divider = () => {
    const dividerHorizontal = (
        <span style={{ borderLeft: '1px solid #CCCCCC', boxSizing: 'border-box', height: '20px' }} />
    );
    const dividerVertical = <span style={{ borderBottom: '1px solid #CCCCCC', boxSizing: 'border-box' }} />;

    const dividerActionHorizontal = (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'var(--color-project)',
                height: 'var(--button-size-m-height)',
            }}
        >
            <span style={{ borderLeft: '1px solid white', boxSizing: 'border-box', height: '20px' }} />
        </div>
    );

    const dividerActionVertical = (
        <div style={{ display: 'inline-flex', justifyContent: 'center', backgroundColor: 'var(--color-project)' }}>
            <span style={{ borderBottom: '1px solid white', boxSizing: 'border-box', width: '50px' }} />
        </div>
    );

    return (
        <>
            <ButtonGroup divider={dividerHorizontal}>
                <Button> Button 1 </Button>
                <Button> Button 2 </Button>
                <Button> Button 3 </Button>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup divider={dividerVertical} vertical>
                <Button> Button 1 </Button>
                <Button> Button 2 </Button>
                <Button> Button 3 </Button>
            </ButtonGroup>
            <br /> <br /> <br /> <br />
            <ButtonGroup divider={dividerHorizontal} gap="l">
                <Button> Button 1 </Button>
                <Button> Button 2 </Button>
                <Button> Button 3 </Button>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup divider={dividerVertical} vertical gap="l">
                <Button> Button 1 </Button>
                <Button> Button 2 </Button>
                <Button> Button 3 </Button>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup divider={dividerActionHorizontal} pin="round">
                <Button view="action" size="m">
                    Button 1
                </Button>
                <Button view="action" size="m">
                    Button 2
                </Button>
                <Button view="action" size="m">
                    Button 3
                </Button>
            </ButtonGroup>
            <br /> <br />
            <ButtonGroup divider={dividerActionVertical} vertical pin="round">
                <Button view="action" size="m">
                    Button 1
                </Button>
                <Button view="action" size="m">
                    Button 2
                </Button>
                <Button view="action" size="m">
                    Button 3
                </Button>
            </ButtonGroup>
        </>
    );
};
