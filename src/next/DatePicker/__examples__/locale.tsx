import React, { forwardRef, useState } from 'react';
import { MaybeDateValue, DatePicker } from '@yandex-lego/components/next/DatePicker';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { Provider } from '@yandex-lego/components/Provider';
import { useLocale } from 'web-platform-alpha';

export const Locale = () => {
    const [locale, setLocale] = useState('ru-RU');

    return (
        <>
            <style>{styles}</style>
            <div className="container-u9ybxrr5">
                <Box locale={locale} setLocale={setLocale} />
                <Provider locale={locale}>
                    <Container />
                </Provider>
            </div>
        </>
    );
};

const Container = () => {
    const [value, setValue] = useState<MaybeDateValue>();
    const { direction } = useLocale();

    return (
        <div dir={direction}>
            <DatePicker view="default" size="s" value={value} onChange={(event) => setValue(event.value)} />
        </div>
    );
};

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { locale, setLocale } = props;

    return (
        <div className="box-u9ybxrr5" ref={ref}>
            <RadioButton
                size="s"
                view="default"
                value={locale}
                options={[
                    { value: 'ru-RU', children: 'ru-RU' },
                    { value: 'en-US', children: 'en-US' },
                    { value: 'he', children: 'he' },
                    { value: 'ar-AE', children: 'ar-AE' },
                ]}
                onChange={(event) => setLocale(event.target.value)}
            />
        </div>
    );
});

const styles = `
    .container-u9ybxrr5 {
        text-align: center;
    }

    .box-u9ybxrr5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
    }
`;
