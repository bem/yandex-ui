import React, { FC } from 'react';
import { DateTimeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';
import { Badge } from '@yandex-lego/components/Badge/desktop';
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle';
import { Calendar as CalendarIcon, Error as ErrorOutlineIcon } from '@yandex/ui-icons';

const Grid: FC = ({ children }) => (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, min-content)',
            gap: '16px 8px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {children}
    </div>
);

export const Addons = () => {
    const badge = <Badge className="custom-content" content={7} outlineColor="var(--badge-fill-color)" />;
    const spinDefault = <Spin className="custom-content" view="default" progress size="xxs" />;
    const errorIcon = <ErrorOutlineIcon size={16} color="#f00" />;
    const calendarIcon = <CalendarIcon size={16} />;

    return (
        <Grid>
            <DateTimeField view="default" size="m" addonBefore={badge} />
            <DateTimeField view="default" size="m" addonAfter={badge} />

            <DateTimeField view="default" size="m" addonBefore={spinDefault} />
            <DateTimeField view="default" size="m" addonAfter={spinDefault} />

            <DateTimeField view="default" size="m" addonBefore={errorIcon} />
            <DateTimeField view="default" size="m" addonAfter={errorIcon} />

            <DateTimeField view="default" size="m" addonBefore={calendarIcon} />
            <DateTimeField view="default" size="m" addonAfter={calendarIcon} />
        </Grid>
    );
};
