import React, { PureComponent, FC } from 'react';
import { render } from 'react-dom';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import '../../../internal/components/BPage/BPage@test.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import './Hermione.components/Hermione/Hermione.css';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { MessageBox, Corner, MessageBoxCornerProps } from '../MessageBox.bundle/desktop';
import { Button } from '../../Button/Button.bundle/desktop';

configureRootTheme({ theme: themeDefault });

const themes = [themeDefault, themeInverse, themeBrand];
const buttons = (
    <>
        <Button view="clear" size="s">skip</Button>
        <Button view="action" size="s">done</Button>
    </>
);

const CornerWithSize: FC<MessageBoxCornerProps> = ({ width = 42, side }) => (
    <Corner key="corner" width={width} side={side}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
            <path
                fill="#ffd426" stroke="#f6cf2e" d="M17.644 34.455l9.906 13.912 4.949-16.171
                16.296-4.911-14.02-9.83.167-16.948-13.614
                10.096L5.135 5.039l5.606 16.07L.567
                34.62z" />
        </svg>
    </Corner>
);

// TODO: Доделать кейсы для вложенных попапов а так же для модификатора _nonvisual.
class MessageBoxHermioneSample extends PureComponent {
    render() {
        return (
            <BPage>
                <div className="Tooltips-examples">
                    {themes.map((theme, index) => (
                        <div key={`tooltips-${index}`} className={cnTheme(theme)}>
                            <Hermione className="Sample">
                                <MessageBox
                                    view="default"
                                    size="s"
                                    layout="tooltip"
                                    children="tooltip size s"
                                />
                                <MessageBox
                                    view="default"
                                    size="m"
                                    layout="tooltip"
                                    children="tooltip size m"
                                />
                                <MessageBox
                                    view="default"
                                    size="l"
                                    layout="tooltip"
                                    children="tooltip size l"
                                />
                            </Hermione>
                        </div>
                    ))}
                </div>
                <div className="Plain-examples">
                    {themes.map((theme, index) => (
                        <div key={`plain-${index}`} className={cnTheme(theme)}>
                            <Hermione className="Sample">
                                <MessageBox
                                    view="default"
                                    size="s"
                                    layout="plain"
                                    children="plain size s"
                                />
                                <MessageBox
                                    view="default"
                                    size="m"
                                    layout="plain"
                                    children="plain size m"
                                />
                                <MessageBox
                                    view="default"
                                    size="l"
                                    layout="plain"
                                    children="plain size l"
                                />
                            </Hermione>
                        </div>
                    ))}
                </div>
                <div className="Functional-examples">
                    {themes.map((theme, index) => (
                        <div key={`functional-${index}`} className={cnTheme(theme)}>
                            <Hermione className="Sample">
                                <MessageBox
                                    view="default"
                                    size="s"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="functional size s"
                                    actions={buttons}
                                />
                                <MessageBox
                                    view="default"
                                    size="m"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="functional size m"
                                    actions={buttons}
                                />
                                <MessageBox
                                    className="CheckHover"
                                    view="default"
                                    size="l"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="functional size l"
                                    actions={buttons}
                                />
                            </Hermione>
                        </div>
                    ))}
                </div>
                <div className="Promo-examples">
                    {themes.map((theme, index) => (
                        <div key={`promo-${index}`} className={cnTheme(theme)}>
                            <Hermione className="Sample">
                                <MessageBox
                                    view="promo"
                                    size="s"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="promo size s"
                                    actions={buttons}
                                />
                                <MessageBox
                                    view="promo"
                                    size="m"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="promo size m"
                                    actions={buttons}
                                />
                                <MessageBox
                                    view="promo"
                                    size="l"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="promo size l"
                                    actions={buttons}
                                />
                            </Hermione>
                        </div>
                    ))}
                </div>
                <div className="Inverse-examples">
                    {themes.map((theme, index) => (
                        <div key={`inverse-${index}`} className={cnTheme(theme)}>
                            <Hermione className="Sample" style={{ backgroundColor: '#0057d3' }}>
                                <MessageBox
                                    view="inverse"
                                    size="s"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="inverse size s"
                                    actions={buttons}
                                />
                                <MessageBox
                                    view="inverse"
                                    size="m"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="inverse size m"
                                    actions={buttons}
                                />
                                <MessageBox
                                    view="inverse"
                                    size="l"
                                    layout="functional"
                                    onClose={() => {}}
                                    children="inverse size l"
                                    actions={buttons}
                                />
                            </Hermione>
                        </div>
                    ))}
                </div>
                <div className="Corners-examples">
                    {themes.map((theme, index) => (
                        <div key={`corners-${index}`} className={cnTheme(theme)}>
                            <Hermione className="Sample">
                                <MessageBox
                                    view="default"
                                    size="m"
                                    layout="plain"
                                    corner={[
                                        <CornerWithSize key="top-left" width={42} side="top-left" />,
                                        <CornerWithSize key="top-right" width={42} side="top-right" />,
                                        <CornerWithSize key="bottom-left" width={42} side="bottom-left" />,
                                        <CornerWithSize key="bottom-right" width={42} side="bottom-right" />,
                                    ]}
                                >
                                    MessageBox со звездочками
                                    <br />
                                    по всем углам
                                </MessageBox>
                            </Hermione>
                        </div>
                    ))}
                </div>
            </BPage>
        );
    }
}

render(<MessageBoxHermioneSample />, document.getElementById('root'));
