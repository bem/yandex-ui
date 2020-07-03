import React, { useState } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';

import { configureRootTheme, cnTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';
import { theme as themeInverse } from '../../../Theme/presets/inverse';
import { theme as themeBrand } from '../../../Theme/presets/brand';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { RadioButton as RadioButtonPresenter } from '../RadioButton@desktop';
import { withSizeS } from '../_size/RadioButton_size_s';
import { withSizeM } from '../_size/RadioButton_size_m';
import { withSizeL } from '../_size/RadioButton_size_l';
import { withViewDefault } from '../_view/RadioButton_view_default@desktop';

import '../../../internal/components/BPage/BPage@test.css';
import './Hermione.components/Hermione/Hermione.css';

configureRootTheme({ theme: themeDefault });

const themes = [themeDefault, themeInverse, themeBrand];
const sizes = ['s', 'm', 'l'];

const RadioButton = compose(
    composeU(withSizeS, withSizeM, withSizeL),
    withViewDefault,
)(RadioButtonPresenter);

const RadioButtonHermioneSample = () => {
    const [value, setValue] = useState('value1');

    return (
        <BPage>
            <Hermione>
                {themes.map((theme, index) => (
                    <div key={index} className={cnTheme(theme)}>
                        {sizes.map((size: any) => (
                            <Hermione key={size} element="Item" modifiers={{ theme: theme.color }}>
                                <RadioButton
                                    options={[
                                        { value: 'value1', children: 'Радио 1' },
                                        { value: 'value2', children: 'Радио 2' },
                                        { value: 'value3', children: 'Радио 3' },
                                    ]}
                                    onChange={(event) => setValue(event.target.value)}
                                    value={value}
                                    size={size}
                                    view="default"
                                />
                            </Hermione>
                        ))}
                    </div>
                ))}
            </Hermione>
        </BPage>
    );
};

render(<RadioButtonHermioneSample />, document.getElementById('root'));
