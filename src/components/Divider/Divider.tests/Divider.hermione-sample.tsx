import React from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import { Divider } from '../Divider';

import '../../../internal/components/BPage/BPage@desktop.css';

configureRootTheme({ theme: themeDefault });

render(
    <BPage>
        <Hermione>
            <Divider size={1} />
            <Divider size={2} as="span" />
            <Divider color="fc0" size={10}>Text</Divider>
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
