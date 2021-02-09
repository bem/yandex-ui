import React from 'react';

import { Header } from '@yandex-lego/components/Header/desktop';
// @ts-expect-error
import * as favoritesIcon from '@yandex-lego/serp-header/dist/base/favorites-icon.desktop';
// @ts-expect-error
import * as yaplusIcon from '@yandex-lego/serp-header/dist/base/yaplus.desktop.base';
// @ts-expect-error
import * as signupLink from '@yandex-lego/serp-header/dist/base/signup-link.desktop';
// @ts-expect-error
import * as loginButton from '@yandex-lego/serp-header/dist/base/login-button.desktop';
// @ts-expect-error
import * as notifierIcon from '@yandex-lego/serp-header/dist/base/notifier.desktop';

const baseProps = {
    key: 'base',
    /* домен */
    tld: 'ru',
    /* язык */
    lang: 'ru',
};

export const SerpHeader = () => {
    return (
        <>
            <div>
                <Header
                    className="SearchHeader"
                    actions={
                        <>
                            <div
                                style={{ height: 44 }}
                                dangerouslySetInnerHTML={{ __html: favoritesIcon.getContent(baseProps) }} />
                            <div dangerouslySetInnerHTML={{ __html: notifierIcon.getContent(baseProps) }} />
                            <div dangerouslySetInnerHTML={{ __html: yaplusIcon.getContent(baseProps) }} />
                            <div dangerouslySetInnerHTML={{ __html: signupLink.getContent(baseProps) }} />
                            <div dangerouslySetInnerHTML={{ __html: loginButton.getContent(baseProps) }} />
                        </>
                    }
                />
            </div>
        </>
    );
};
