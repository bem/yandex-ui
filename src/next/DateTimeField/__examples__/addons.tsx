import React, { FC } from 'react';
import { DateTimeField } from '@yandex-lego/components/next/DateTimeField/desktop/bundle';
import { Badge } from '@yandex-lego/components/Badge/desktop';
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle';

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

const CalendarIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.49951 14.5V11.5H8.50051V14.5H5.49951ZM5.49951 10.5V7.5H8.49951V10.5H5.49951ZM1.49951 14.5V11.5H4.49951V14.5H1.49951ZM1.49951 10.5V7.499H4.49951V10.5H1.49951ZM9.49951 10.5V7.5H12.4995V10.5H9.49951ZM9.49951 14.5V11.5H12.4995V14.5H9.49951ZM9.49951 6.5V3.5H12.4995V6.5H9.49951ZM13.4995 10.5V7.499H16.5005V10.5H13.4995ZM13.4995 6.5V3.5H16.5005V6.5H13.4995ZM5.49951 6.5V3.5H8.50051V6.5H5.49951Z"
                fill="black"
                fillOpacity="0.5"
            />
        </svg>
    );
};

const styles = `
    .spin-dark {
        --spin-view-default-border-color: #000;
    }

    .spin-link {
        --spin-view-default-border-color: rgba(0, 69, 189, 0.6);
    }
`;

export const Addons = () => {
    const badge = <Badge className="custom-content" content={7} outlineColor="var(--badge-fill-color)" />;
    const spinDark = <Spin className="custom-content spin-dark" view="default" progress size="xxs" />;
    const spinDefault = <Spin className="custom-content" view="default" progress size="xxs" />;
    const spinLink = <Spin className="custom-content spin-link" view="default" progress size="xxs" />;
    const customAddon = <CalendarIcon />;

    return (
        <>
            <style>{styles}</style>
            <Grid>
                <DateTimeField view="default" size="m" addonBefore={badge} />
                <DateTimeField view="default" size="m" addonAfter={badge} />

                <DateTimeField view="default" size="m" addonBefore={spinDark} />
                <DateTimeField view="default" size="m" addonAfter={spinDark} />

                <DateTimeField view="default" size="m" addonBefore={spinDefault} />
                <DateTimeField view="default" size="m" addonAfter={spinDefault} />

                <DateTimeField view="default" size="m" addonBefore={spinLink} />
                <DateTimeField view="default" size="m" addonAfter={spinLink} />

                <DateTimeField view="default" size="m" addonBefore={customAddon} />
                <DateTimeField view="default" size="m" addonAfter={customAddon} />
            </Grid>
        </>
    );
};
