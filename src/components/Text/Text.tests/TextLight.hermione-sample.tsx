import React from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import { Text } from '../Text.bundle/desktop';

import '../../../internal/components/BPage/BPage@desktop.css';
import { text, typographyValues } from '../Text.examples/desktop/assets';

import 'yandex-font/build/browser.css';

configureRootTheme({ theme: themeDefault });

render(
    <BPage>
        <Hermione>
            {
                (typographyValues).map((typography, idx) => (
                    <Text as="div" key={idx} weight="light" typography={typography}>
                        {text}
                    </Text>
                ),
                )
            }
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
