import React, { useRef, useState } from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import '../../../internal/components/BPage/BPage@test.css';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Tooltip } from '../Tooltip.bundle/desktop';

const themes = [themeDefault, themeInverse, themeBrand];

const directionSizeS = ['bottom-left', 'bottom-center', 'bottom-right'];
const directionSizeM = ['left-top', 'left-center', 'left-bottom'];
const directionSizeL = ['top-center', 'top-right', 'top-left'];
// prettier-ignore
const states = [
    ['right-top', 'warning'],
    ['right-center', 'success'],
    ['right-bottom', 'alert'],
];

configureRootTheme({ theme: themeDefault });

const TooltipHermioneSample = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const scopeRef1 = useRef<HTMLDivElement>(null);
    const scopeRef2 = useRef<HTMLDivElement>(null);
    const scopeRef3 = useRef<HTMLDivElement>(null);
    const anchorRef1 = useRef<HTMLDivElement>(null);
    const anchorRef2 = useRef<HTMLDivElement>(null);
    const anchorRef3 = useRef<HTMLDivElement>(null);
    const list = [
        { visible: visible1, setVisible: setVisible1, scopeRef: scopeRef1, anchorRef: anchorRef1 },
        { visible: visible2, setVisible: setVisible2, scopeRef: scopeRef2, anchorRef: anchorRef2 },
        { visible: visible3, setVisible: setVisible3, scopeRef: scopeRef3, anchorRef: anchorRef3 },
    ];

    return (
        <BPage>
            {themes.map((theme: any, index) => (
                <div key={index} className={cnTheme(theme)}>
                    <Hermione className="New" style={{ display: 'inline-flex' }}>
                        <div
                            style={{ position: 'relative', padding: 75, paddingLeft: 160, paddingRight: 160 }}
                            ref={list[index].scopeRef}
                        >
                            <div
                                className={`Hermione-Click${index}`}
                                style={{
                                    background: '#e6e6e6',
                                    height: 150,
                                    width: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                }}
                                ref={list[index].anchorRef}
                                onClick={() => list[index].setVisible(!list[index].visible)}
                            >
                                Anchor
                            </div>
                            {directionSizeM.map((direction: any) => (
                                <Tooltip
                                    hasTail
                                    key={direction}
                                    anchor={list[index].anchorRef}
                                    direction={direction}
                                    scope={list[index].scopeRef}
                                    view="default"
                                    visible={list[index].visible}
                                    size="m"
                                >
                                    {`${direction} size m`}
                                </Tooltip>
                            ))}
                            {directionSizeS.map((direction: any) => (
                                <Tooltip
                                    hasTail
                                    key={direction}
                                    anchor={list[index].anchorRef}
                                    direction={direction}
                                    scope={list[index].scopeRef}
                                    view="default"
                                    visible={list[index].visible}
                                    size="s"
                                >
                                    {`${direction} size s`}
                                </Tooltip>
                            ))}
                            {directionSizeL.map((direction: any) => (
                                <Tooltip
                                    key={direction}
                                    anchor={list[index].anchorRef}
                                    direction={direction}
                                    scope={list[index].scopeRef}
                                    view="default"
                                    visible={list[index].visible}
                                    size="l"
                                >
                                    {`${direction} size l`}
                                </Tooltip>
                            ))}
                            {states.map(([direction, state]: any) => (
                                <Tooltip
                                    hasTail
                                    key={direction}
                                    anchor={list[index].anchorRef}
                                    direction={direction}
                                    scope={list[index].scopeRef}
                                    view="default"
                                    visible={list[index].visible}
                                    size="m"
                                    state={state}
                                >
                                    {`${direction} size m`}
                                </Tooltip>
                            ))}
                        </div>
                    </Hermione>
                </div>
            ))}
        </BPage>
    );
};

render(<TooltipHermioneSample />, document.getElementById('root'));
