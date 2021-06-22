import React from 'react';
import { Header, HeaderSearch, HeaderNav, HeaderNavItem } from '@yandex-lego/components/Header/desktop';
import { withViewSearchArrow as withButtonView } from '@yandex-lego/components/Header/Button';
import { withViewSearchArrow as withTextinputView } from '@yandex-lego/components/Header/Textinput';
import { Button } from '@yandex-lego/components/Button/desktop';
import { Textinput } from '@yandex-lego/components/Textinput/desktop';

const SearchButton = withButtonView(Button);
const SearchInput = withTextinputView(Textinput);

export const SearchHermioneCase = () => {
    return (
        <Header>
            <HeaderNav>
                <HeaderNavItem>Пункт меню</HeaderNavItem>
            </HeaderNav>
            <HeaderSearch>
                <SearchInput view="search-arrow" value="Поиск" />
                <SearchButton view="search-arrow">Найти</SearchButton>
            </HeaderSearch>
        </Header>
    );
};
