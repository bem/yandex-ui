import React, { FC, ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle';
import { Item } from '@yandex-lego/components/Menu/desktop';
import { Text } from '@yandex-lego/components/Text/desktop';
import lunr from 'lunr';

type DocumentsStore = {
    [key: string]: {
        title: string;
        section: string;
        content: string;
    };
};

declare global {
    interface Window {
        __LUNR__: {
            loaded: Promise<any>;
            index: lunr.Index;
            store: DocumentsStore;
        };
    }
}

export const Search: FC = () => {
    const anchorRef = useRef<HTMLSpanElement>(null);
    const [lunrLoaded, setLunrLoaded] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (!window || !window.__LUNR__) {
            return;
        }

        window.__LUNR__.loaded.then(() => {
            setLunrLoaded(true);
        });
    }, []);

    const searchQueryChanged = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (!lunrLoaded) {
                return;
            }

            const searchQuery = event.target.value;

            if (searchQuery.length === 0) {
                setSearchResults([]);
                setSearchQuery('');
                return;
            }

            setSearchResults(window.__LUNR__.index.search(searchQuery).map((result) => result.ref));
            setSearchQuery(searchQuery);
        },
        [lunrLoaded],
    );

    const searchResultClicked = useCallback(() => {
        setSearchResults([]);
        setSearchQuery('');
    }, []);

    return (
        <>
            <Textinput
                innerRef={anchorRef}
                placeholder="Поиск по документации"
                value={searchQuery}
                onChange={searchQueryChanged}
                disabled={!lunrLoaded}
                style={{ maxWidth: '500px' }}
                baseline
                size="s"
                view="default"
            />

            <Popup
                visible={searchResults.length > 0 && searchQuery.length > 0}
                target="anchor"
                anchor={anchorRef}
                direction="bottom-end"
                nonvisual
                view="default"
            >
                <Menu style={{ maxHeight: '60vh', maxWidth: '500px' }} view="default" size="m">
                    {searchResults.map((result, index) => {
                        const { store } = window.__LUNR__;

                        return (
                            <Item className="Search_Result" key={index}>
                                <Link onClick={searchResultClicked} to={result}>
                                    <Text as="div" typography="overline-l" color="primary">
                                        {store[result].title} - {store[result].section}
                                    </Text>
                                    <Text overflow="ellipsis" as="div" typography="control-xl" color="secondary">
                                        {store[result].content}
                                    </Text>
                                </Link>
                            </Item>
                        );
                    })}
                </Menu>
            </Popup>
        </>
    );
};
