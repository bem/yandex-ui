import React, { PureComponent, ChangeEvent } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Radiobox as RadioboxPresenter } from '../Radiobox@desktop';
import { withSizeS } from '../_size/Radiobox_size_s';
import { withSizeM } from '../_size/Radiobox_size_m';
import { withThemeNormal } from '../_theme/Radiobox_theme_normal@desktop';
import { withThemePseudo } from '../_theme/Radiobox_theme_pseudo@desktop';
import { withViewDefault } from '../_view/Radiobox_view_default@desktop';

import './Hermione.components/Radiobox/Radiobox.css';
import './Hermione.components/Hermione/Hermione.css';
import '../../../internal/components/BPage/BPage@test.css';

configureRootTheme({ theme: themeDefault });

const Radiobox = compose(
    composeU(withSizeS, withSizeM),
    composeU(withThemeNormal, withThemePseudo),
    withViewDefault,
)(RadioboxPresenter);

const options1 = [
    { label: 'Радио 1', value: 'value1' },
    { label: 'Радио 2', value: 'value2' },
    { label: 'Радио 3', value: 'value3' },
];

const options2 = [
    { label: 'только друзьям', value: 'value1' },
    { label: 'только мне', value: 'value2' },
    { label: 'только не мне', value: 'value3' },
];

const options3 = [
    { label: 'только друзьям', value: 'value1' },
    { label: 'только мне', value: 'value2', autoFocus: true },
    { label: 'только не мне', value: 'value3', disabled: true },
];

const themes = [themeDefault, themeInverse, themeBrand];
const sizes = ['s', 'm'];

class RadioboxHermioneSample extends PureComponent {
    state: { [key: string]: string } = {
        radio1Value: '',
        radio2Value: '',
        radio3Value: '',
        radio4Value: '',
        radio5Value: '',
        radio6Value: 'value2',
        radio7Value: 'value2',
        radio8Value: 'value1',
        toneRadio0Value: 'value2',
        toneRadio1Value: 'value2',
        toneRadio2Value: 'value2',
        toneRadio3Value: 'value2',
        toneRadio4Value: 'value2',
    };

    render() {
        return (
            <BPage>
                <div id="simple" className="Hermione" style={{ margin: 20 }}>
                    <Radiobox
                        options={options1}
                        onChange={this.onChange('radio1')}
                        value={this.state.radio1Value}
                        size="s"
                        theme="normal"
                        name="radio1"
                    />
                </div>
                <div id="simple-m" className="Hermione" style={{ margin: 20 }}>
                    <Radiobox
                        options={options1}
                        onChange={this.onChange('radio2')}
                        value={this.state.radio2Value}
                        size="m"
                        theme="normal"
                        name="radio2"
                    />
                </div>
                <div
                    id="bg-color"
                    className="Hermione"
                    style={{
                        margin: 20,
                        backgroundColor: '#f5f5ea',
                        padding: 5,
                        display: 'inline-block',
                    }}
                >
                    <Radiobox
                        options={[options1[0]]}
                        onChange={this.onChange('radio3')}
                        value={this.state.radio3Value}
                        size="s"
                        theme="normal"
                        name="radio3"
                    />
                </div>
                <div id="simple-pseudo" className="Hermione" style={{ margin: 20 }}>
                    <Radiobox
                        options={options1}
                        onChange={this.onChange('radio4')}
                        value={this.state.radio4Value}
                        size="s"
                        theme="pseudo"
                        name="radio4"
                    />
                </div>
                <div
                    id="bg-color-pseudo"
                    className="Hermione"
                    style={{
                        margin: 20,
                        backgroundColor: '#f5f5ea',
                        padding: 5,
                        display: 'inline-block',
                    }}
                >
                    <Radiobox
                        options={[options1[0]]}
                        onChange={this.onChange('radio5')}
                        value={this.state.radio5Value}
                        size="s"
                        theme="pseudo"
                        name="radio5"
                    />
                </div>
                <div id="disabled" className="Hermione" style={{ margin: 20 }}>
                    <Radiobox
                        disabled
                        options={options2}
                        onChange={this.onChange('radio6')}
                        value={this.state.radio6Value}
                        size="s"
                        theme="normal"
                        name="radio6"
                    />
                </div>
                <div id="disabled-pseudo" className="Hermione" style={{ margin: 20 }}>
                    <Radiobox
                        disabled
                        options={options2}
                        onChange={this.onChange('radio7')}
                        value={this.state.radio7Value}
                        size="s"
                        theme="pseudo"
                        name="radio7"
                    />
                </div>
                <div id="different" className="Hermione" style={{ margin: 20 }}>
                    <Radiobox
                        options={options3}
                        onChange={this.onChange('radio8')}
                        value={this.state.radio8Value}
                        size="s"
                        theme="normal"
                        name="radio8"
                    />
                </div>
                <Hermione className="NewDesign" style={{ margin: 20 }}>
                    {themes.map((theme: any, index) => (
                        <div key={index} className={cnTheme(theme)} style={{ display: 'inline-block' }}>
                            {sizes.map((size: any) => (
                                <Hermione key={size} element="Item" modifiers={{ theme: theme.color }}>
                                    <Radiobox
                                        options={options1}
                                        onChange={this.onChange(`toneRadio${index}`)}
                                        value={this.state[`toneRadio${index}Value`]}
                                        size={size}
                                        view="default"
                                        name={`toneRadio${index}`}
                                    />
                                </Hermione>
                            ))}
                        </div>
                    ))}
                </Hermione>
            </BPage>
        );
    }

    onChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ [`${id}Value`]: event.target.value });
    };
}

render(<RadioboxHermioneSample />, document.getElementById('root'));
