import React from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import '../../../internal/components/BPage/BPage@test.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import './Textarea.components/Hermione/Hermione.css';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Textarea as TextareaBase } from '../Textarea@desktop';
import { withThemeNormal } from '../_theme/Textarea_theme_normal@desktop';
import { withSizeS } from '../_size/Textarea_size_s';
import { withSizeM } from '../_size/Textarea_size_m';
import { withHasClear } from '../_hasClear/Textarea_hasClear@desktop';
import { withViewDefault } from '../_view/Textarea_view_default@desktop';
import './Textarea.components/Textarea/Textarea.css';

configureRootTheme({ theme: themeDefault });

const Textarea = compose(
    withHasClear,
    withThemeNormal,
    withViewDefault,
    composeU(withSizeS, withSizeM),
)(TextareaBase);

const themes = [themeDefault, themeInverse, themeBrand];
const text = `Вполне вероятно, что это даже многострочный текст получится.
Нельзя быть абсолютно уверенным, но такое возможно.`;

render(
    <BPage>
        <Hermione className="Classic">
            {['s', 'm'].map((size: any) => (
                <Hermione key={size} element="Wrapper" modifiers={{ size }}>
                    <Hermione element="Col">
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} />
                        </Hermione>
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} value={text} />
                        </Hermione>
                    </Hermione>
                    <Hermione element="Col">
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} disabled />
                        </Hermione>
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} disabled value={text} />
                        </Hermione>
                    </Hermione>
                    <Hermione element="Col">
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} hasClear />
                        </Hermione>
                        <Hermione element="Item" modifiers={{ filled: true }}>
                            <Textarea theme="normal" size={size} hasClear value={text} />
                        </Hermione>
                    </Hermione>
                    <Hermione element="Col">
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} hasClear disabled />
                        </Hermione>
                        <Hermione element="Item">
                            <Textarea theme="normal" size={size} hasClear disabled value={text} />
                        </Hermione>
                    </Hermione>
                </Hermione>
            ))}
        </Hermione>
        <Hermione className="New">
            {themes.map((theme, index) =>
                ['s', 'm'].map((size: any) => (
                    <div key={index} className={cnTheme(theme)}>
                        <Hermione element="Wrapper" modifiers={{ size, color: theme.color }}>
                            <Hermione element="Col">
                                <Hermione element="Item">
                                    <Textarea view="default" size={size} />
                                </Hermione>
                                <Hermione element="Item">
                                    <Textarea view="default" size={size} value={text} />
                                </Hermione>
                            </Hermione>
                            <Hermione element="Col">
                                <Hermione element="Item">
                                    <Textarea view="default" size={size} disabled />
                                </Hermione>
                                <Hermione element="Item">
                                    <Textarea view="default" size={size} disabled value={text} />
                                </Hermione>
                            </Hermione>
                            <Hermione element="Col">
                                <Hermione element="Item">
                                    <Textarea view="default" size={size} hasClear />
                                </Hermione>
                                <Hermione element="Item" modifiers={{ filled: true }}>
                                    <Textarea view="default" size={size} hasClear value={text} />
                                </Hermione>
                            </Hermione>
                            <Hermione element="Col">
                                <Hermione element="Item">
                                    <Textarea view="default" size={size} hasClear disabled />
                                </Hermione>
                                <Hermione element="Item">
                                    <Textarea hasClear disabled view="default" size={size} value={text} />
                                </Hermione>
                            </Hermione>
                            <Hermione element="Col">
                                <Hermione element="Item" style={{ paddingBottom: 32 }}>
                                    <Textarea view="default" size={size} state="error" hint="error-message" />
                                </Hermione>
                            </Hermione>
                        </Hermione>
                    </div>
                )),
            )}
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
