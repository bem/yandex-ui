import React from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import { Progress } from '../Progress';

import './Hermione.components/Hermione/Hermione.css';
import '../../../internal/components/BPage/BPage@desktop.css';

configureRootTheme({ theme: themeDefault });

render(
    <BPage>
        <Hermione>
            <Progress value={0.5} />
            <Progress value={100} maxValue={100} />
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
