import React, { FC, useEffect, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle';

export const Floating = () => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => setVisible(false), 2000);
        }
    }, [isVisible]);

    return (
        <>
            <style>{styles}</style>
            <div className="container-14g47cs">
                <div className="inner-14g47cs">
                    <div className="content-14g47cs" />
                </div>
                <Popup direction="top" view="default" visible={isVisible} scope="inplace" style={{ top: 0 }}>
                    <div className="promo-14g47cs">
                        <Check />
                        <Text typography="body-short-m">Вы подписаны</Text>
                    </div>
                </Popup>
                <Popup view="default" visible scope="inplace" style={{ bottom: 0 }}>
                    <div className="promo-14g47cs">
                        <Text typography="subheader-xl" weight="bold">
                            Подпишитесь на обновления, получите 100 баллов
                        </Text>
                        <TooltipStateful
                            hasTail
                            scope="inplace"
                            direction="top-start"
                            content="Подписку можно отменить в любой момент"
                            view="default"
                            size="m"
                            className="tooltip-14g47cs"
                            defaultVisible
                        >
                            <Button size="s" className="help-button-14g47cs">
                                <Help />
                            </Button>
                        </TooltipStateful>
                        <Button view="action" size="m" onClick={() => setVisible(true)}>
                            Подписаться
                        </Button>
                    </div>
                </Popup>
            </div>
        </>
    );
};

const styles = `
    .container-14g47cs {
        height: 400px;
        width: 364px;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .inner-14g47cs {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
        display: flex;
        justify-content: center;
    }

    .content-14g47cs {
        width: 364px;
        height: 462px;
        background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='364' height='462' viewBox='0 0 364 462'%3E%3Crect y='286' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='310' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='334' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='358' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='382' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='406' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='430' width='264' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='454' width='264' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='78' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='102' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='126' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='150' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='174' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='198' width='364' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='222' width='264' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect y='246' width='264' height='8' rx='4' fill='%23A4A9BD' /%3E%3Crect width='184' height='18' rx='9' fill='%23A4A9BD' /%3E%3Crect y='28' width='124' height='18' rx='9' fill='%23A4A9BD' /%3E%3C/svg%3E");
    }

    .promo-14g47cs {
        padding: 16px 32px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, max-content);
        gap: 16px;
    }

    .help-button-14g47cs .Button2-Text {
        display: flex;
        align-items: center;
    }

    .tooltip-14g47cs {
        --popup-view-default-typo-color: #fff;
        --tooltip-view-default-fill-color-base: #272733;
        --tooltip-borderRadius: 8px;
        --tooltip-view-default-shadow: none;
    }
`;

const Check: FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path
            d="M22 12.001C22 17.5238 17.5228 22.001 12 22.001C6.47715 22.001 2 17.5238 2 12.001C2 6.47813 6.47715 2.00098 12 2.00098C17.5228 2.00098 22 6.47813 22 12.001ZM17.1644 7.75357C16.7516 7.38665 16.1195 7.42383 15.7526 7.83662L10.4861 13.7615L8.23485 11.3223C7.86027 10.9165 7.22761 10.8912 6.82177 11.2657C6.41592 11.6403 6.39057 12.273 6.76515 12.6788L9.39076 15.5236C9.95263 16.1324 10.9016 16.1704 11.5104 15.6085C11.5372 15.5829 11.5506 15.5701 11.5636 15.5569C11.5765 15.5437 11.5891 15.5301 11.6141 15.5028L17.2474 9.16534C17.6143 8.75256 17.5771 8.12049 17.1644 7.75357Z"
            fill="#00985F"
        />
    </svg>
);

const Help = () => (
    <svg width="16" height="16" viewBox="0 0 16 16">
        <path
            d="M0 8.00097C0 12.4192 3.58172 16.0009 8 16.0009C12.4183 16.0009 16 12.4192 16 8.00097C16 3.58268 12.4183 0.000961304 8 0.000961304C3.58172 0.000961304 0 3.58268 0 8.00097ZM14 8.00097C14 11.3147 11.3137 14.0009 8 14.0009C4.68629 14.0009 2 11.3147 2 8.00097C2 4.68725 4.68629 2.00096 8 2.00096C11.3137 2.00096 14 4.68725 14 8.00097ZM5.178 6.09696C5.178 4.44096 6.546 3.43296 8.274 3.43296C9.978 3.43296 11.25 4.44096 11.25 5.92896V5.97696C11.25 7.39296 10.338 7.96896 9.486 8.34096L9.27 8.43696C8.982 8.56896 8.886 8.72497 8.886 9.07296C8.886 9.24527 8.74631 9.38496 8.574 9.38496H7.734C7.49541 9.38496 7.302 9.19154 7.302 8.95296C7.302 8.13696 7.59 7.62096 8.346 7.28496L8.562 7.18896C9.282 6.86496 9.666 6.60096 9.666 6.00096C9.666 5.35296 9.114 4.92096 8.274 4.92096C7.41 4.92096 6.762 5.35296 6.762 6.16896C6.762 6.32801 6.63306 6.45696 6.474 6.45696H5.538C5.33918 6.45696 5.178 6.29578 5.178 6.09696ZM8.094 9.88896C7.446 9.88896 6.954 10.3569 6.954 11.0289C6.954 11.7009 7.446 12.1689 8.094 12.1689C8.742 12.1689 9.234 11.7009 9.234 11.0289C9.234 10.3569 8.742 9.88896 8.094 9.88896Z"
            fill="currentColor"
        />
    </svg>
);
