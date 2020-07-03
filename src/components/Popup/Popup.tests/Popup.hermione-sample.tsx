import React, { PureComponent, createRef } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import '../../../internal/components/BPage/BPage@test.css';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import './Hermione.components/Hermione/Hermione.css';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Direction, Popup as PopupPresenter } from '../Popup@desktop';
import { withTargetAnchor } from '../_target/Popup_target_anchor';
import { withThemeNormal } from '../_theme/Popup_theme_normal';
import { withThemeClear } from '../_theme/Popup_theme_clear';
import { withViewDefault } from '../_view/Popup_view_default';

import { withZIndex } from '../../../hocs/withZIndex/withZIndex';
import { withOutsideClick } from '../../../hocs/withOutsideClick/withOutsideClick';

configureRootTheme({ theme: themeDefault });

const Popup = compose(
    composeU(withThemeNormal, withThemeClear),
    withOutsideClick,
    withTargetAnchor,
    withViewDefault,
    withZIndex,
)(PopupPresenter);

const themes = [themeDefault, themeInverse, themeBrand];

const allDirections: Direction[] = [
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-center',
    'right-bottom',
    'left-top',
    'left-center',
    'left-bottom',
];

// TODO: Доделать кейсы для вложенных попапов а так же для модификатора _nonvisual.
class PopupHermioneSample extends PureComponent {
    readonly state: any = {
        refClassic0Visible: false,
        refClassic1Visible: false,

        refNew0Visible: false,
        refNew1Visible: false,
        refNew2Visible: false,
    };

    readonly _scopes: any = {
        scopeClassicRef0: createRef<HTMLDivElement>(),
        scopeClassicRef1: createRef<HTMLDivElement>(),

        scopeNewRef0: createRef<HTMLDivElement>(),
        scopeNewRef1: createRef<HTMLDivElement>(),
        scopeNewRef2: createRef<HTMLDivElement>(),
    };

    readonly _refs: any = {
        anchorClassicRef0: createRef<HTMLDivElement>(),
        anchorClassicRef1: createRef<HTMLDivElement>(),

        anchorNewRef0: createRef<HTMLDivElement>(),
        anchorNewRef1: createRef<HTMLDivElement>(),
        anchorNewRef2: createRef<HTMLDivElement>(),
    };

    render() {
        return (
            <BPage>
                <Hermione className="Classic">
                    <Hermione element="Row" modifiers={{ type: 'directions' }} innerRef={this._scopes.scopeClassicRef0}>
                        <Hermione
                            element="Anchor"
                            innerRef={this._refs.anchorClassicRef0}
                            onClick={this.onClick('refClassic0')}
                        >
                            Anchor
                        </Hermione>
                        {allDirections.map((direction: any) => (
                            <Popup
                                anchor={this._refs.anchorClassicRef0}
                                directions={[direction]}
                                key={direction}
                                mainOffset={5}
                                scope={this._scopes.scopeClassicRef0}
                                target="anchor"
                                theme="normal"
                                visible={this.state.refClassic0Visible}
                            >
                                {direction}
                            </Popup>
                        ))}
                    </Hermione>
                    <Hermione
                        element="Row"
                        modifiers={{ type: 'directions-tail' }}
                        innerRef={this._scopes.scopeClassicRef1}
                    >
                        <Hermione
                            element="Anchor"
                            innerRef={this._refs.anchorClassicRef1}
                            onClick={this.onClick('refClassic1')}
                        >
                            Anchor
                        </Hermione>
                        {allDirections.map((direction: any) => (
                            <Popup
                                anchor={this._refs.anchorClassicRef1}
                                directions={[direction]}
                                hasTail
                                key={direction}
                                mainOffset={5}
                                scope={this._scopes.scopeClassicRef1}
                                target="anchor"
                                theme="normal"
                                visible={this.state.refClassic1Visible}
                            >
                                {direction}
                            </Popup>
                        ))}
                    </Hermione>
                </Hermione>
                <Hermione className="New">
                    {themes.map((theme: any, index: number) => (
                        <div
                            key={index}
                            className={cnTheme(theme)}
                            ref={this._scopes[`scopeNewRef${index}`]}
                            style={{ position: 'relative' }}
                        >
                            <Hermione element="Row" modifiers={{ color: theme.color, type: 'directions-tail' }}>
                                <Hermione
                                    element="Anchor"
                                    innerRef={this._refs[`anchorNewRef${index}`]}
                                    onClick={this.onClick(`refNew${index}`)}
                                >
                                    Anchor
                                </Hermione>
                                {allDirections.map((direction: any) => (
                                    <Popup
                                        hasTail
                                        anchor={this._refs[`anchorNewRef${index}`]}
                                        directions={[direction]}
                                        key={direction}
                                        mainOffset={5}
                                        scope={this._scopes[`scopeNewRef${index}`]}
                                        target="anchor"
                                        view="default"
                                        visible={this.state[`refNew${index}Visible`]}
                                    >
                                        {direction}
                                    </Popup>
                                ))}
                            </Hermione>
                        </div>
                    ))}
                </Hermione>
            </BPage>
        );
    }

    private onClick = (id: string) => () => {
        const computedKey = `${id}Visible`;
        this.setState({ [computedKey]: !this.state[computedKey] });
    };
}

render(<PopupHermioneSample />, document.getElementById('root'));
