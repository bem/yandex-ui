import React, { FC } from 'react';
import { Button, IButtonProps } from '@yandex-lego/components/next/Button/desktop/bundle';
import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';

const Grid: FC = ({ children }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, min-content) 16px min-content', gap: '8px 16px' }}>
        {children}
    </div>
);

const iconArrow = (className: string) => <Icon className={className} glyph="type-arrow" direction="bottom" />;

const Row: FC<IButtonProps> = (props) => {
    const gap = (['action', 'default', 'raised'] as const).includes(props.view as any) ? 's' : undefined;

    return (
        <>
            <Button {...props} iconRight={iconArrow}>
                Создать
            </Button>
            <Button {...props} iconRight={iconArrow} disabled>
                Создать
            </Button>
            <Button {...props} iconRight={iconArrow} progress>
                Создать
            </Button>
            <span />
            <ButtonGroup pin="round" selected={[0]} gap={gap}>
                <Button {...props}>День</Button>
                <Button {...props}>Неделя</Button>
                <Button {...props}>Месяц</Button>
                <Button {...props}>Год</Button>
            </ButtonGroup>
        </>
    );
};

export const States = () => {
    return (
        <Grid>
            <Row size="s" view="action" />
            <Row size="s" view="default" />
            <Row size="s" view="raised" />
            <Row size="s" view="pseudo" />
            <Row size="s" view="link" />
            <Row size="s" view="clear" />
        </Grid>
    );
};
