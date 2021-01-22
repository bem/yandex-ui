import React from 'react';

import { Header, HeaderSearch, YandexLogo, InlineLogo } from '@yandex-lego/components/Header/desktop';
import { Link } from '@yandex-lego/components/Link/Link';

const styles = `
    .TUIMore {
        border-radius: 50%;
        background-color: white;
        border: 3px solid black;
        height: 24px;
        width: 24px;
        font-size: 18px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        color: black;
        box-sizing: border-box;;
    }

    .TUIMore::after {
        content:  "i";
    }

    .TUI {
        --header-content-indentRight: 0;
        --header-content-width: 100%;
        --header-content-maxWidth: none;
        --header-search-max-width: none;
        --header-search-margin-left: 0;
        --header-search-width: 100%;
        --header-content-width: 50%;
        --header-shadow: 0 1px 1px rgba(0,0,0,.05);
    }

    .TUI img {
        margin-top: -2px;
    }
`;

export const TUI = () => (
    <>
        <style>{styles}</style>
        <Header
            className="TUI"
            logo={
                <>
                    <YandexLogo lang="en" href="#" />
                    <InlineLogo src="http://s3.mds.yandex.net/frontend/yandex-lego/serp-header/_/2Z89hfNn.svg" href="//trendbox.yandex-team.ru/" />
                </>
            }
            actions={<Link className="TUIMore" href="/help" />}
        >
            <HeaderSearch />
        </Header>
    </>
);
