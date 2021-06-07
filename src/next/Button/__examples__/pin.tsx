import React, { FC } from 'react';
import { Button as BaseButton } from '@yandex-lego/components/next/Button/desktop/bundle';

const Button = BaseButton.bind({});
Button.defaultProps = { size: 'm', view: 'pseudo' };

const Section: FC = ({ children }) => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>{children}</div>
);

const Space = () => <span style={{ width: 8 }} />;

export const Pin = () => {
    return (
        <>
            <Section>
                <Button view="raised">Round</Button>
                <Space />
                <Button view="raised" pin="circle-circle">
                    Circle
                </Button>
            </Section>

            <Section>
                <Button view="raised" pin="round-brick">
                    Round-Brick
                </Button>
                <Space />
                <Button view="raised" pin="brick-brick">
                    Brick
                </Button>
                <Space />
                <Button view="raised" pin="brick-round">
                    Brick-Round
                </Button>
            </Section>

            <Section>
                <Button view="raised" pin="circle-brick">
                    Circle-Brick
                </Button>
                <Space />
                <Button view="raised" pin="brick-brick">
                    Brick
                </Button>
                <Space />
                <Button view="raised" pin="brick-circle">
                    Brick-Circle
                </Button>
            </Section>

            <Section>
                <Button pin="brick-clear">Brick-Clear</Button>
                <Space />
                <Button pin="clear-clear">Clear</Button>
                <Space />
                <Button pin="clear-brick">Clear-Brick</Button>
            </Section>

            <Section>
                <Button pin="round-clear">Round-Clear</Button>
                <Space />
                <Button pin="clear-clear">Clear</Button>
                <Space />
                <Button pin="clear-round">Clear-Round</Button>
            </Section>

            <Section>
                <Button pin="circle-clear">Circle-Clear</Button>
                <Space />
                <Button pin="clear-clear">Clear</Button>
                <Space />
                <Button pin="clear-circle">Clear-Circle</Button>
            </Section>
        </>
    );
};
