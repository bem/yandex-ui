import React, { FC } from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Badge } from '@yandex-lego/components/Badge/desktop';
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle';

const Grid: FC = ({ children }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, min-content)', gap: '8px 16px' }}>{children}</div>
);

const styles = `
    .custom-content {
        margin-left: -10px;
        margin-right: 10px;
    }

    .spin-dark {
        --spin-view-default-border-color: #000;
    }

    .spin-link {
        --spin-view-default-border-color: rgba(0, 69, 189, 0.6);
    }
`;

export const CustomContent = () => {
    const badge = <Badge className="custom-content" content={7} />;
    const spinDark = <Spin className="custom-content spin-dark" view="default" progress size="xxs" />;
    const spinDefault = <Spin className="custom-content" view="default" progress size="xxs" />;
    const spinLink = <Spin className="custom-content spin-link" view="default" progress size="xxs" />;

    return (
        <>
            <style>{styles}</style>
            <Grid>
                <Button view="action" size="s" addonAfter={badge}>
                    Фильтры
                </Button>
                <Button view="default" size="s" addonAfter={badge}>
                    Фильтры
                </Button>
                <Button view="pseudo" size="s" addonAfter={badge}>
                    Фильтры
                </Button>
                <Button view="link" size="s" addonAfter={badge}>
                    Фильтры
                </Button>
                <Button view="raised" size="s" addonAfter={badge}>
                    Фильтры
                </Button>
                <Button view="clear" size="s" addonAfter={badge}>
                    Фильтры
                </Button>

                <Button view="action" size="s" addonAfter={spinDark}>
                    Фильтры
                </Button>
                <Button view="default" size="s" addonAfter={spinDark}>
                    Фильтры
                </Button>
                <Button view="pseudo" size="s" addonAfter={spinDefault}>
                    Фильтры
                </Button>
                <Button view="link" size="s" addonAfter={spinLink}>
                    Фильтры
                </Button>
                <Button view="raised" size="s" addonAfter={spinDefault}>
                    Фильтры
                </Button>
                <Button view="clear" size="s" addonAfter={spinDefault}>
                    Фильтры
                </Button>
            </Grid>
        </>
    );
};
