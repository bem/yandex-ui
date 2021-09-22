import React, { FC, useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const View = () => {
    return (
        <>
            <style>{styles}</style>
            <div className="container-103p3y2">
                <Example>
                    <b>Popup view="default"</b>
                    <br />
                    используется по умолчанию, подходит, если у вас нет потребности сделать свои стили
                </Example>
                <Example nonvisual>
                    <b>Popup Nonvisual</b>
                    <br />
                    используется, когда вам нужно задать свои стили, например, для выпадающего списка
                </Example>
            </div>
        </>
    );
};

const styles = `
    .container-103p3y2 {
        display: grid;
        grid-template-columns: repeat(2, min-content);
        gap: 320px;
        justify-content: center;
        padding-bottom: 80px;
    }

    .button-103p3y2 .Button2-Text {
        display: flex;
        align-items: center;
    }

    .content-103p3y2 {
        max-width: 300px;
        padding: 8px 16px;
        font-family: var(--typography-font-family);
        font-size: var(--text-caption-size-xl-font-size);
        line-height: var(--text-caption-size-xl-line-height);
    }
`;

const Example: FC<any> = (props) => {
    const { nonvisual, children } = props;
    const targetRef = useRef(null);
    const [isVisible, setVisible] = useState(true);

    return (
        <>
            <Button
                onClick={() => setVisible(!isVisible)}
                innerRef={targetRef}
                className="button-103p3y2"
                view="clear"
                size="s"
            >
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                        d="M0 7.99903C0 12.4173 3.58172 15.999 8 15.999C12.4183 15.999 16 12.4173 16 7.99903C16 3.58075 12.4183 -0.000976562 8 -0.000976562C3.58172 -0.000976562 0 3.58075 0 7.99903ZM14 7.99903C14 11.3128 11.3137 13.999 8 13.999C4.68629 13.999 2 11.3128 2 7.99903C2 4.68532 4.68629 1.99903 8 1.99903C11.3137 1.99903 14 4.68532 14 7.99903ZM5.178 6.09503C5.178 4.43903 6.546 3.43103 8.274 3.43103C9.978 3.43103 11.25 4.43903 11.25 5.92703V5.97503C11.25 7.39103 10.338 7.96703 9.486 8.33903L9.27 8.43503C8.982 8.56703 8.886 8.72303 8.886 9.07103C8.886 9.24334 8.74631 9.38303 8.574 9.38303H7.734C7.49541 9.38303 7.302 9.18961 7.302 8.95103C7.302 8.13503 7.59 7.61903 8.346 7.28303L8.562 7.18703C9.282 6.86303 9.666 6.59903 9.666 5.99903C9.666 5.35103 9.114 4.91903 8.274 4.91903C7.41 4.91903 6.762 5.35103 6.762 6.16703C6.762 6.32608 6.63306 6.45503 6.474 6.45503H5.538C5.33918 6.45503 5.178 6.29385 5.178 6.09503ZM8.094 9.88703C7.446 9.88703 6.954 10.355 6.954 11.027C6.954 11.699 7.446 12.167 8.094 12.167C8.742 12.167 9.234 11.699 9.234 11.027C9.234 10.355 8.742 9.88703 8.094 9.88703Z"
                        fill="currentColor"
                    />
                </svg>
            </Button>
            <Popup
                hasTail
                nonvisual={nonvisual}
                target="anchor"
                anchor={targetRef}
                direction="bottom"
                view="default"
                visible={isVisible}
                scope="inplace"
            >
                <div className="content-103p3y2">{children}</div>
            </Popup>
        </>
    );
};
