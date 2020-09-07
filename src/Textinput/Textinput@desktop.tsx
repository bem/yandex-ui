import React, { FC } from 'react';
import { compose } from '@bem-react/core';
import { withRegistry } from '@bem-react/di';

import { IWithControlProps, withControl } from '../withControl/withControl@desktop';
import { withAutoFocus } from '../withAutoFocus/withAutoFocus';
import { cnTextinput, ITextinputProps as ITextinputPropsCommon, Textinput as TextinputCommon } from './Textinput';
import { textinputRegistry } from './Textinput.registry/desktop';

export interface ITextinputProps extends ITextinputPropsCommon, IWithControlProps<HTMLInputElement> {}

const TextinputPresenter: FC<ITextinputProps> = ({ className, hovered, ...props }) => (
    <TextinputCommon {...props} className={cnTextinput({ hovered }, [className])} />
);

export * from './Textinput';
export const Textinput = compose(
    withRegistry(textinputRegistry),
    withControl,
    withAutoFocus,
)(TextinputPresenter);
