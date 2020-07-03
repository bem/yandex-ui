import React from 'react';
import { render } from 'react-dom';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Hermione } from '../../../internal/components/Hermione/Hermione';
import { Tumbler } from '../Tumbler.bundle/desktop';
import './Tumbler.components/Hermione/Hermione.css';
import '../../../internal/components/BPage/BPage@test.css';

configureRootTheme({ theme: themeDefault });

const themes = [themeDefault, themeInverse, themeBrand];

const UnlockIcon = () => (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11 5.003a1 1 0 0 0 1-1 4 4 0 0 0-8 0v3h-.5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H6v-3a2 2 0 1 1 4 0 1 1 0 0 0 1 1z"
            fill="currentColor"
        />
    </svg>
);

const TumblerHermioneSample = () => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

    return (
        <>
            <Hermione modifiers={{ dynamic: true }}>
                <Hermione element="Grid">
                    <Hermione element="Col">
                        <Tumbler
                            className="both-label"
                            onChange={() => setChecked1(!checked1)}
                            checked={checked1}
                            view="default"
                            size="m"
                            labelBefore="off"
                            labelAfter="on"
                        />
                    </Hermione>

                    <Hermione element="Col">
                        <Tumbler
                            className="single-label"
                            onChange={() => setChecked2(!checked2)}
                            checked={checked2}
                            view="default"
                            size="m"
                            labelBefore="toggle"
                        />
                    </Hermione>
                </Hermione>
            </Hermione>
            {themes.map((theme, index) => (
                <div className={cnTheme(theme)} key={index}>
                    <Hermione modifiers={{ color: theme.color }}>
                        {[false, true].map((checked, index) => (
                            <Hermione key={index} element="Grid">
                                <Hermione element="Col">
                                    <Hermione element="ColRow">
                                        <Tumbler
                                            onChange={() => null}
                                            checked={checked}
                                            view="default"
                                            size="s"
                                            labelBefore="off"
                                            labelAfter={<UnlockIcon />}
                                        />
                                    </Hermione>
                                    <Hermione element="ColRow">
                                        <Tumbler
                                            onChange={() => null}
                                            checked={checked}
                                            view="default"
                                            size="m"
                                            labelBefore="off"
                                            labelAfter={<UnlockIcon />}
                                        />
                                    </Hermione>
                                    <Hermione element="ColRow">
                                        <Tumbler
                                            className={`${checked ? 'checked' : 'unchecked'}-enabled`}
                                            onChange={() => null}
                                            checked={checked}
                                            view="default"
                                            size="l"
                                            labelBefore="off"
                                            labelAfter={<UnlockIcon />}
                                        />
                                    </Hermione>
                                </Hermione>
                                <Hermione element="Col">
                                    <Hermione element="ColRow">
                                        <Tumbler
                                            disabled
                                            onChange={() => null}
                                            checked={checked}
                                            view="default"
                                            size="s"
                                            labelBefore="off"
                                            labelAfter={<UnlockIcon />}
                                        />
                                    </Hermione>
                                    <Hermione element="ColRow">
                                        <Tumbler
                                            disabled
                                            onChange={() => null}
                                            checked={checked}
                                            view="default"
                                            size="m"
                                            labelBefore="off"
                                            labelAfter={<UnlockIcon />}
                                        />
                                    </Hermione>
                                    <Hermione element="ColRow">
                                        <Tumbler
                                            className={`${checked ? 'checked' : 'unchecked'}-disabled`}
                                            disabled
                                            onChange={() => null}
                                            checked={checked}
                                            view="default"
                                            size="l"
                                            labelBefore="off"
                                            labelAfter={<UnlockIcon />}
                                        />
                                    </Hermione>
                                </Hermione>
                            </Hermione>
                        ))}
                    </Hermione>
                </div>
            ))}
        </>
    );
};

render(<TumblerHermioneSample />, document.getElementById('root'));
