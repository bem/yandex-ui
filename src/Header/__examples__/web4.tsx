import React from 'react';

import { Header, HeaderSearch, Logoaas, YandexLogo } from '@yandex-lego/components/Header/desktop';
import { withViewSearchArrow } from '@yandex-lego/components/Header/Button';
import { Button } from '@yandex-lego/components/Button/desktop';
import { Textinput, withHasClear } from '@yandex-lego/components/Textinput/desktop';
import { withViewSearchArrow as withViewSearchArrowTextinput } from '@yandex-lego/components/Header/Textinput';

const SearchButton = withViewSearchArrow(Button);
const SearchInput = withHasClear(withViewSearchArrowTextinput(Textinput));

const styles = `
    .SearchHeader {
        --header-content-height: 55px;
        --header-logo-indent-right: 0;
        --header-search-indent-left: 0;
    }

    .SearchHeader .YandexHeader-Logoaas,
    .SearchHeader .YandexHeader-Logo {
        width: 100px;
        height: 35px;
        background-position-x: 0;
    }

    .SearchHeader .YandexHeader-Logoaas .Image {
        margin-left: 0;
    }

    .DarkHeader {
        --header-fill-color: #1c1d28;
        --header-search-fill-color-base: #292b3b;
        --header-search-fill-color-hover: #373a50;
        --header-search-button-typo-color: #888994;
        --header-search-textinput-typo-color: #fff;
        --header-search-textinput-fill-color: #1c1d28;
    }
`;

export const Web4 = () => {
    return (
        <>
            <style>{styles}</style>
            <Header className="SearchHeader">
                <HeaderSearch action="//yandex.ru/search">
                    <SearchInput view="search-arrow" name="text" value="Yandex" />
                    <SearchButton view="search-arrow">Найти</SearchButton>
                </HeaderSearch>
            </Header>
            <div className="DarkHeader">
                <Header
                    className="SearchHeader"
                    logo={<Logoaas color="fff" size={33} />}
                >
                    <HeaderSearch action="//yandex.ru/search">
                        <SearchInput view="search-arrow" name="text" value="Yandex" />
                        <SearchButton view="search-arrow">Найти</SearchButton>
                    </HeaderSearch>
                </Header>
            </div>
            <br />
            <b>Редизайн</b>
            <br />
            <Header
                className="SearchHeader"
                logo={<YandexLogo rebranding lang="en" />}
            >
                <HeaderSearch action="//yandex.ru/search">
                    <SearchInput view="search-arrow" name="text" value="Yandex" />
                    <SearchButton view="search-arrow">Найти</SearchButton>
                </HeaderSearch>
            </Header>
            <div className="DarkHeader">
                <Header
                    className="SearchHeader"
                    logo={<Logoaas color="fff" size={33} />}
                >
                    <HeaderSearch action="//yandex.ru/search">
                        <SearchInput view="search-arrow" name="text" value="Yandex" />
                        <SearchButton view="search-arrow">Найти</SearchButton>
                    </HeaderSearch>
                </Header>
            </div>
        </>
    );
};
