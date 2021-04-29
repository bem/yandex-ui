import React, { FC } from 'react';
import { Button, IButtonProps } from '@yandex-lego/components/Button/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/desktop/bundle';

const FilterIcon: FC<{ className: string }> = ({ className }) => (
    <span
        className={className}
        style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
    >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0L7 5V10L5 12V5L0 0H12Z" />
        </svg>
    </span>
);

const Grid: FC = ({ children }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, min-content)', gap: '16px 24px' }}>{children}</div>
);

const iconFilter = (className: string) => <FilterIcon className={className} />;
const iconArrow = (className: string) => <Icon className={className} glyph="type-arrow" direction="bottom" />;

const Row: FC<IButtonProps> = (props) => {
    return (
        <>
            <Button {...props}>Фильтры</Button>
            <Button {...props} iconLeft={iconFilter}>
                Фильтры
            </Button>
            <Button {...props} iconRight={iconArrow}>
                Фильтры
            </Button>
            <Button {...props} iconLeft={iconFilter} iconRight={iconArrow}>
                Фильтры
            </Button>
            <Button {...props} icon={iconFilter} />
        </>
    );
};

export const Content = () => {
    return (
        <Grid>
            <Row view="action" size="s" />
            <Row view="default" size="s" />
            <Row view="pseudo" size="s" />
            <Row view="link" size="s" />
            <Row view="raised" size="s" />
            <Row view="clear" size="s" />
        </Grid>
    );
};
