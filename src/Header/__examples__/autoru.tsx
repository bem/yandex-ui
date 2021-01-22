import React, { FC } from 'react';

import { Header, HeaderNav, HeaderNavLinkProps } from '@yandex-lego/components/Header/desktop';
import { Link } from '@yandex-lego/components/Link/Link';
import { Image } from '@yandex-lego/components/Image/desktop/bundle';

const AutoItem: FC<HeaderNavLinkProps> = ({ children, href }) => {
    return <Link className="CustomItem" href={href}>{children}</Link>;
};

const styles = `
    .ADV {
        margin-bottom: -4px;
    }

    .YandexHeader.AutoRu {
        --header-fill-color: #db3727;
        --header-content-height: 44px;
    }

    .Burger {
        height: 44px;
        width: 48px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
        color: white;
        background-image: url(${require('./assets/burger.svg')});
    }

    .Burger:hover {
        background-color: white;
        background-image: url(${require('./assets/burger-red.svg')});
    }

    .CustomLogo {
        height: 44px;
        width: 104px;
        margin-left: 5px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(${require('./assets/auto.svg')});
    }

    .CustomItem {
        font-size: 15px;
        font-weight: 700;
        padding: 0 15px;
        height: 44px;
        line-height: 44px;
        font-weight: 600;
        color: white;
    }

    .CustomItem_active {
        background-color: #5b0;
    }

    .CustomItem:hover {
        background-color: white;
        color: #db3727;
    }

    .CustomActions .CustomItem {
        display: inline-block;
        height: 44px;
        font-size: 13px;
        font-weight: 400;
    }

    #___gatsby .ADV,
    #___gatsby .AutoRu .YandexHeader-Nav {
        display: none;
    }

`;

export const Autoru = () => {
    return (
        <>
            <style>{styles}</style>
            <Image className="ADV" width="calc(100vw - 40px)" src="https://jing.yandex-team.ru/files/axaxaman/autoru-1.png" />
            <Header
                className="AutoRu"
                logo={(
                    <>
                        <div className="Burger" />
                        <Link href="//auto.ru" className="CustomLogo" />
                    </>
                )}
                actions={
                    <div className="CustomActions">
                        <Link className="CustomItem">Форумы</Link>
                        <Link className="CustomItem">Дилерам</Link>
                        <Link className="CustomItem CustomItem_active">Продать</Link>
                        <Link className="CustomItem">Войти</Link>
                    </div>
                }
            >
                <HeaderNav>
                    <AutoItem href="/">Легковые</AutoItem>
                    <AutoItem href="/">Коммерческие</AutoItem>
                    <AutoItem href="/">Мото</AutoItem>
                    <AutoItem href="/">Запчасти</AutoItem>
                    <AutoItem href="/">ПроАвто</AutoItem>
                    <AutoItem href="/">Журнал</AutoItem>
                </HeaderNav>
            </Header>
        </>
    );
};
