import React from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import { Text } from '../Text.bundle/desktop';

import '../../../internal/components/BPage/BPage@desktop.css';
import { paragraphText } from '../Text.examples/desktop/assets';

import 'yandex-font/build/browser.css';

configureRootTheme({ theme: themeDefault });

render(
    <BPage>
        <Hermione>
            {[1, 2, 3].map((n) => (
                <Hermione key={n} element="Item" style={{ marginBottom: '1rem' }}>
                    <Text as="div" weight="light" overflow="ellipsis" maxLines={n} typography="body-long-l">
                        {paragraphText}
                    </Text>
                </Hermione>
            ))}
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
