import React from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import '../../../internal/components/BPage/BPage@test.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import './Link.components/Hermione/Hermione.css';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Link as LinkBase } from '../Link@desktop';
import { withThemeBlack } from '../_theme/Link_theme_black@desktop';
import { withThemeNormal } from '../_theme/Link_theme_normal@desktop';
import { withThemeGhost } from '../_theme/Link_theme_ghost@desktop';
import { withThemeOuter } from '../_theme/Link_theme_outer@desktop';
import { withThemePseudo } from '../_theme/Link_theme_pseudo@desktop';
import { withThemeStrong } from '../_theme/Link_theme_strong@desktop';
import { withPseudo } from '../_pseudo/Link_pseudo';
import { withViewDefault } from '../_view/Link_view_default@desktop';

configureRootTheme({ theme: themeDefault });

const Link = compose(
    withPseudo,
    withViewDefault,
    composeU(withThemeBlack, withThemeNormal, withThemeGhost, withThemeOuter, withThemePseudo, withThemeStrong),
)(LinkBase);

const themes = [themeDefault, themeInverse, themeBrand];

render(
    <BPage>
        <Hermione className="Classic">
            {['normal', 'black', 'ghost', 'outer', 'strong', 'pseudo'].map((theme: any) => (
                <Hermione key={theme} element="Row" modifiers={{ theme }}>
                    <Hermione element="Item">
                        <Link theme={theme} href="#">
                            Ссылонька
                        </Link>
                    </Hermione>
                    <Hermione element="Item">
                        <Link disabled theme={theme} href="#">
                            Ссылонька
                        </Link>
                    </Hermione>
                </Hermione>
            ))}
        </Hermione>
        <Hermione className="New">
            {themes.map((theme, index) => (
                <div key={index} className={cnTheme(theme)}>
                    <Hermione element="Row" modifiers={{ color: theme.color }}>
                        <Hermione element="Item">
                            <Link view="default" href="#">
                                Ссылонька
                            </Link>
                        </Hermione>
                        <Hermione element="Item">
                            <Link disabled view="default" href="#">
                                Ссылонька
                            </Link>
                        </Hermione>
                    </Hermione>
                </div>
            ))}
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
