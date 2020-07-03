import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Hermione } from '../../../internal/components/Hermione/Hermione';
import { BPage } from '../../../internal/components/BPage/BPage@desktop';

import { Button as buttonBase } from '../../Button/Button@desktop';
import { withViewDefault as withButtonViewDefault } from '../../Button/_view/Button_view_default@desktop';
import { withSizeM as withButtonSizeM } from '../../Button/_size/Button_size_m';

import { Spin as spinBase } from '../Spin';
import { withSizeXXS as spinSizeXXS } from '../_size/Spin_size_xxs';
import { withSizeXS as spinSizeXS } from '../_size/Spin_size_xs';
import { withSizeS as spinSizeS } from '../_size/Spin_size_s';
import { withSizeM as spinSizeM } from '../_size/Spin_size_m';
import { withSizeL as spinSizeL } from '../_size/Spin_size_l';
import { withPositionCenter as spinPositionCenter } from '../_position/Spin_position_center';
import { withViewDefault as spinViewDefault } from '../_view/Spin_view_default';

import './Spin.components/Hermione/Hermione.css';

configureRootTheme({ theme: themeDefault });

const themes = [themeDefault, themeInverse, themeBrand];

const Spin = compose(
    spinPositionCenter,
    spinViewDefault,
    composeU(spinSizeXXS, spinSizeXS, spinSizeS, spinSizeM, spinSizeL),
)(spinBase);

const Button = compose(
    withButtonSizeM,
    withButtonViewDefault,
)(buttonBase);

class ProgressToggler extends PureComponent {
    state = {
        progressXxs: false,
        progressXs: false,
        progressS: false,
        progressM: false,
        progressL: false,
    };

    render() {
        return (
            <>
                <Hermione modifiers={{ size: 'xxs' }}>
                    <Button
                        view="default"
                        checked={this.state.progressXxs}
                        size="m"
                        onClick={() => this.setState({ progressXxs: !this.state.progressXxs })}
                        children="xxs"
                    />
                    <div style={{ width: 10, display: 'inline-block' }} />
                    <Spin
                        view="default"
                        size="xxs"
                        progress={this.state.progressXxs}
                    />
                </Hermione>
                <Hermione modifiers={{ size: 'xs' }}>
                    <Button
                        view="default"
                        checked={this.state.progressXs}
                        size="m"
                        children="xs"
                        onClick={() => this.setState({ progressXs: !this.state.progressXs })}
                    />
                    <div style={{ width: 10, display: 'inline-block' }} />
                    <Spin
                        view="default"
                        size="xs"
                        progress={this.state.progressXs}
                    />
                </Hermione>
                <Hermione modifiers={{ size: 's' }}>
                    <Button
                        view="default"
                        checked={this.state.progressS}
                        size="m"
                        children="s"
                        onClick={() => this.setState({ progressS: !this.state.progressS })}
                    />
                    <div style={{ width: 10, display: 'inline-block' }} />
                    <Spin
                        view="default"
                        size="s"
                        progress={this.state.progressS}
                    />
                </Hermione>
                <Hermione modifiers={{ size: 'm' }}>
                    <Button
                        view="default"
                        autoComplete="off"
                        checked={this.state.progressM}
                        size="m"
                        children="m"
                        onClick={() => this.setState({ progressM: !this.state.progressM })}
                    />
                    <div style={{ width: 10, display: 'inline-block' }} />
                    <Spin
                        view="default"
                        size="m"
                        progress={this.state.progressM}
                    />
                </Hermione>
                <Hermione modifiers={{ size: 'l' }}>
                    <Button
                        view="default"
                        autoComplete="off"
                        checked={this.state.progressL}
                        size="m"
                        children="l"
                        onClick={() => this.setState({ progressL: !this.state.progressL })}
                    />
                    <div style={{ width: 10, display: 'inline-block' }} />
                    <Spin
                        view="default"
                        size="l"
                        progress={this.state.progressL}
                    />
                </Hermione>
            </>
        );
    }
}

render(
    <BPage>
        <ProgressToggler />
        <Hermione modifiers={{ position: 'center' }}>
            {['xxs', 'xs', 's', 'm', 'l'].map((size) => (
                <Hermione key={size} element="Item" className="Box">
                    <Spin progress size={size as any} position="center" view="default" />
                </Hermione>
            ))}
        </Hermione>
        <Hermione modifiers={{ view: 'default' }}>
            {themes.map((theme: any, index: number) => (
                <div key={index} className={cnTheme(theme)} style={{ display: 'inline-block' }}>
                    <Hermione element="Item" className="Box">
                        <Spin progress size="m" view="default" position="center" />
                    </Hermione>
                </div>
            ))}
        </Hermione>
    </BPage>,
    document.getElementById('root'),
);
