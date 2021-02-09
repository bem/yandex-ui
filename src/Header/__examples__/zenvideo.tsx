import React from 'react';

import { Header, HeaderSearch, Logoaas } from '@yandex-lego/components/Header/desktop';
import { withViewSearchArrow } from '@yandex-lego/components/Header/Button';
import { Button, withSizeM, withViewClear } from '@yandex-lego/components/Button/desktop';
import { Textinput, withHasClear } from '@yandex-lego/components/Textinput/desktop';
import { withViewSearchArrow as withViewSearchArrowTextinput } from '@yandex-lego/components/Header/Textinput';
import { UserPic } from '@yandex-lego/components/UserPic/desktop/bundle';
import { User2Vanilla, IUser2VanillaProps } from '@yandex-lego/serp-header/User2';

const userProps: IUser2VanillaProps = {
    uid: 1,
    name: '',
    avatarId: '20706/226291201-19837531',
    avatarUrl: {
        low: 'https://avatars.mds.yandex.net/get-yapic/26057/lxSElH10aKDc5jbQnXcIGCkFk-1/islands-middle',
        high: 'https://avatars.mds.yandex.net/get-yapic/26057/lxSElH10aKDc5jbQnXcIGCkFk-1/islands-retina-middle',
    },
    yu: 123,
    bundleKey: 'move-to-header',
    helpUrl: '//yandex.ru/support/mail',
    customMenuItems: [{ text: 'Кастомный айтем', url: '//yandex.ru', action: 'custom' }],
    tld: 'ru',
    lang: 'ru',
    platform: 'desktop',
};

const SearchButton = withViewSearchArrow(Button);
const SearchInput = withHasClear(withViewSearchArrowTextinput(Textinput));

const ButtonZen = withViewClear(withSizeM(Button));

const styles = `
    .SearchHeader {
        --header-content-height: 55px;
        --header-logo-indent-right: 0;
        --header-search-indent-left: 0;
        --header-content-indent-right: 0;
        --header-actions-space-left: 0;
    }

    .SearchHeader .YandexHeader-Logoaas,
    .SearchHeader .YandexHeader-Logo {
        width: 80px;
        height: 35px;
        background-position-x: 0;
    }

    .SearchHeader .YandexHeader-Logoaas .Image {
        margin-left: 0;
    }

    .DarkHeader {
        --button-view-clear-typo-color-base: #fff;
        --header-fill-color: #1c1d28;
        --header-search-fill-color-base: #292b3b;
        --header-search-fill-color-hover: #373a50;
        --header-search-button-typo-color: #888994;
        --header-search-textinput-typo-color: #fff;
        --header-search-textinput-fill-color: #1c1d28;
    }

    .ExampleIcon {
        width: 20px;
        height: 20px;
        font-size: 15px;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        background-color: #373a50;
        opacity: 1;
        display: inline-block;
        vertical-align: baseline;
        color: #fff;
    }

    .ExampleIcon::before {
        content: "+";
    }
`;

export const ZenVideo = () => {
    return (
        <>
            <style>{styles}</style>
            <div className="DarkHeader">
                <Header
                    className="SearchHeader"
                    logo={
                        <>
                            <Logoaas color="fff" size={33} />
                            <Logoaas color="fff" name="Видео" size={33} />
                        </>
                    }
                    actions={
                        <>
                            <ButtonZen size="m" iconRight={() => (<div className="ExampleIcon" />)} view="clear">Добавить</ButtonZen>
                            <UserPic plus size="s" avatarId="43978/351415393-30646433" />
                        </>
                    }
                >
                    <HeaderSearch action="//yandex.ru/search">
                        <SearchInput view="search-arrow" name="text" value="Пример с UserPic из lego/components" />
                        <SearchButton view="search-arrow">Найти</SearchButton>
                    </HeaderSearch>
                </Header>
                <Header
                    className="SearchHeader"
                    logo={
                        <>
                            <Logoaas color="fff" size={33} />
                            <Logoaas color="fff" name="Видео" size={33} />
                        </>
                    }
                    actions={
                        <>
                            <Button />
                            <User2Vanilla {...userProps} />
                        </>
                    }
                >
                    <HeaderSearch action="//yandex.ru/search">
                        <SearchInput view="search-arrow" name="text" value="Пример с user2 из serp-header" />
                        <SearchButton view="search-arrow">Найти</SearchButton>
                    </HeaderSearch>
                </Header>
            </div>
        </>
    );
};
