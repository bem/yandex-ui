import React, { FC } from 'react';
import { Button, IButtonProps } from '@yandex-lego/components/Button/desktop/bundle';

const Grid: FC = ({ children }) => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, min-content)',
            gap: '16px 8px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {children}
    </div>
);

const Row: FC<IButtonProps> = (props) => {
    return (
        <>
            <Button {...props} size="s">
                Small
            </Button>
            <Button {...props} size="m">
                Medium
            </Button>
            <Button {...props} size="l">
                Large
            </Button>
        </>
    );
};

export const Size = () => (
    <Grid>
        <Row view="action" />
        <Row view="default" />
        <Row view="link" />
        <Row view="pseudo" />
        <Row view="raised" />
        <Row view="clear" />
    </Grid>
);
