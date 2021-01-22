import React, { useState } from 'react';

import { Header } from '@yandex-lego/components/Header';
import { Link } from '@yandex-lego/components/Link/Link';
import { Image } from '@yandex-lego/components/Image/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { UserPic } from '@yandex-lego/components/UserPic/desktop/bundle';

const styles = `
.Moe-Logo {
    display: inline-flex;
    color: black;
    font-weight: 500;
    align-items: center;
    width: 100px;
    justify-content: space-between;
}

.Moe {
    --header-content-width: 100%;
    --header-content-maxWidth: none;
    --header-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    --header-content-height: 64px;
    --button-borderRadius: 0;
    --button-size-s-height: 47px;
    --button-size-s-text-indentAll: 0 20px;
    --textinput-size-s-height: 47px;
}
`;

export const Moe = () => {
    const [width, setWidth] = useState(160);

    return (
        <>
            <style>{styles}</style>
            <Header
                className="Moe"
                logo={(
                    <>
                        <Link className="Moe-Logo" href="//moe.yandex-team.ru/">
                            <Image src="//yastatic.net/s3/corp-education-external/old-moebius/static/_//images/6778cda0c39c606029c3c4424c3e49c6.png" />
                            <span>Мёбиус</span>
                        </Link>
                    </>
                )}
                actions={(
                    <>
                        <div><Textinput style={{ width }} onBlur={() => { setWidth(160) }} onFocus={() => { setWidth(350) }} view="default" size="s" /></div>
                        <Button view="default" size="s"><b>?</b></Button>
                        <Button view="default" size="s"><b>ENG</b></Button>
                        <UserPic size="s" avatarId="43978/351415393-30646433" />
                    </>
                )}
            />
        </>
    );
};
