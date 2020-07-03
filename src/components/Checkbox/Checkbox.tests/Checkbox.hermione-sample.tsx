import React, { PureComponent, Fragment } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { BPage } from '../../../internal/components/BPage/BPage';
import { Hermione } from '../../../internal/components/Hermione/Hermione';
import { generateCombinations } from '../../../internal/utils';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { Checkbox as CheckboxPresenter } from '../Checkbox@desktop';
import { withLinesMulti } from '../_lines/Checkbox_lines_multi';
import { withLinesOne } from '../_lines/Checkbox_lines_one';
import { withSizeM } from '../_size/Checkbox_size_m';
import { withSizeS } from '../_size/Checkbox_size_s';
import { withThemeNormal } from '../_theme/Checkbox_theme_normal@desktop';
import { withThemePseudo } from '../_theme/Checkbox_theme_pseudo@desktop';
import { withViewDefault } from '../_view/Checkbox_view_default@desktop';
import { withIndeterminate } from '../_indeterminate/Checkbox_indeterminate';

import { Icon as IconPresenter } from '../../Icon/Icon';
import { withTypeCamera } from '../../../internal/components/Icon/_type/Icon_type_camera';

import { withCheckedState } from './Hermione.hocs/withCheckedState';

import '../../../internal/components/BPage/BPage@desktop.css';
import './Hermione.components/Hermione/Hermione.css';

configureRootTheme({ theme: themeDefault });

const Checkbox = compose(
    composeU(withSizeM, withSizeS),
    composeU(withThemeNormal, withThemePseudo),
    composeU(withLinesMulti, withLinesOne),
    withViewDefault,
    withCheckedState,
    withIndeterminate,
)(CheckboxPresenter);

const Icon = withTypeCamera(IconPresenter);

const themes = [themeDefault, themeInverse, themeBrand];
const sizes = ['s', 'm'];

const staticCombinations = generateCombinations(
    {
        theme: ['normal', 'pseudo'],
        size: ['s', 'm'],
        hovered: [false, true],
        focused: [false, true],
        pressed: [false, true],
        checked: [false, true],
        disabled: [false],
        lines: ['multi'],
    },
    {
        theme: ['normal', 'pseudo'],
        size: ['s', 'm'],
        hovered: [false],
        focused: [false],
        pressed: [false],
        checked: [false, true],
        disabled: [true],
        lines: ['multi'],
    },
);

class CheckboxHermioneSample extends PureComponent {
    render() {
        return (
            <BPage>
                <Hermione id="static">
                    {staticCombinations.map((props: any, index: number) => (
                        <Hermione element="Item" key={index}>
                            <Checkbox {...props} />
                            {'\u00a0'}
                            <Checkbox {...props} label="checkbox" />
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione id="dynamic">
                    <Hermione element="Item" modifiers={{ theme: 'normal' }}>
                        <Checkbox label="checkbox" lines="multi" size="s" theme="normal" />
                    </Hermione>
                    <Hermione element="Item" modifiers={{ theme: 'pseudo' }}>
                        <Checkbox label="checkbox" lines="multi" size="s" theme="pseudo" />
                    </Hermione>
                </Hermione>
                <Hermione id="baseline">
                    <Hermione element="Item">
                        {'Чекбоксы\u00a0\u00a0'}
                        <Checkbox label="выравниваются" lines="multi" size="m" theme="normal" />
                        {'\u00a0по базовой\u00a0\u00a0'}
                        <Checkbox label="линии" lines="multi" size="s" theme="normal" />
                        {'.'}
                    </Hermione>
                </Hermione>
                <Hermione id="lines">
                    <Hermione element="Item" modifiers={{ size: 's' }}>
                        <Checkbox
                            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            lines="multi"
                            size="s"
                            theme="normal"
                        />
                    </Hermione>
                    <br />
                    <Hermione element="Item" modifiers={{ size: 'm' }}>
                        <Checkbox
                            label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            lines="multi"
                            size="m"
                            theme="normal"
                        />
                    </Hermione>
                </Hermione>
                <Hermione className="NewDesign">
                    {sizes.map((size: any, index: number) => (
                        <Fragment key={index}>
                            {themes.map((theme: any, index: number) => (
                                <div key={index} className={cnTheme(theme)} style={{ display: 'inline-block' }}>
                                    <Hermione element="Item" modifiers={{ theme: theme.color }}>
                                        <Checkbox lines="multi" size={size} view="default" />
                                        {'\u00a0'}
                                        <Checkbox checked label="checkbox" lines="multi" size={size} view="default" />
                                    </Hermione>
                                </div>
                            ))}
                            <br />
                        </Fragment>
                    ))}
                </Hermione>
                <Hermione id="baseline-view-default">
                    <Hermione element="Item">
                        {'Чекбоксы\u00a0\u00a0'}
                        <Checkbox label="выравниваются" lines="multi" size="s" view="default" />
                        {'\u00a0по базовой\u00a0\u00a0'}
                        <Checkbox label=" линии." lines="multi" size="m" view="default" />
                    </Hermione>
                </Hermione>
                <Hermione id="lines-false">
                    {['s', 'm'].map((size: any, index: number) => (
                        <Hermione key={index} element="Item" modifiers={{ size }}>
                            <Checkbox label="Однострочный checkbox рядом с иконкой" size={size} view="default" />
                            {'\u00a0'}
                            <Icon type="camera" />
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione id="lines-one">
                    {['s', 'm'].map((size: any, index: number) => (
                        <Hermione key={index} element="Item" modifiers={{ size }}>
                            <Checkbox label="Однострочный checkbox с длинной подписью" lines="one" size={size} view="default" />
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione id="baseline-lines-one">
                    <Hermione element="Item">
                        {'Чекбоксы\u00a0\u00a0'}
                        <Checkbox
                            label="выравниваются"
                            lines="one"
                            size="s"
                            view="default"
                        />
                        {'\u00a0по\u00a0базовой\u00a0\u00a0'}
                        <Checkbox label=" линии." lines="one" size="m" view="default" />
                    </Hermione>
                </Hermione>
                <Hermione id="indeterminate">
                    <Hermione element="Item" modifiers={{ view: 'classic' }}>
                        <Checkbox
                            indeterminate
                            label="indeterminate (view classic)"
                            size="m"
                            theme="normal"
                        />
                    </Hermione>
                    <br />
                    <Hermione element="Item" modifiers={{ view: 'default' }}>
                        <Checkbox
                            indeterminate
                            label="indeterminate (view default)"
                            size="m"
                            view="default"
                        />
                    </Hermione>
                </Hermione>
            </BPage>
        );
    }
}

render(<CheckboxHermioneSample />, document.getElementById('root'));
