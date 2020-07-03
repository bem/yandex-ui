import React from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import { Text, TextAlignValue } from '../Text.bundle/desktop';

import '../../../internal/components/BPage/BPage@desktop.css';
import { paragraphText } from '../Text.examples/desktop/assets';

import 'yandex-font/build/browser.css';

configureRootTheme({ theme: themeDefault });

render(
    <BPage>
        <Hermione>
            {
                ([
                    'start',
                    'end',
                    'center',
                    'justify',
                ] as TextAlignValue[]).map((align, idx) => (
                    <Hermione key={idx} element="Item" style={{ marginBottom: '1rem' }}>
                        <Text as="div" weight="light" align={align} typography="body-long-l">
                            {paragraphText}
                        </Text>
                    </Hermione>
                ),
                )
            }
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
