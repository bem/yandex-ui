import React from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import '../../../internal/components/BPage/BPage@desktop.css';

import 'yandex-font/build/browser.css';
import { LinkColor } from '../Text.examples/desktop/link-color.examples';
import { ControlColor } from '../Text.examples/desktop/control-color.examples';
import { Color } from '../Text.examples/desktop/color.examples';

configureRootTheme({ theme: themeDefault });

render(
    <BPage>
        <Hermione>
            { LinkColor() }
            { ControlColor() }
            { Color() }
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
