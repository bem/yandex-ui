import React, { PureComponent, CSSProperties, ComponentType, createRef, RefObject } from 'react';
import { render } from 'react-dom';
import { compose, composeU } from '@bem-react/core';
import { withRegistry, Registry } from '@bem-react/di';

import { BPage } from '../../../internal/components/BPage/BPage@desktop';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

import { configureRootTheme } from '../../../Theme';
import { theme as themeDefault } from '../../../Theme/presets/default';

import { Button as ButtonDesktop } from '../../Button/Button@desktop';
import { withSizeL as withButtonSizeL } from '../../Button/_size/Button_size_l';
import { withSizeM as withButtonSizeM } from '../../Button/_size/Button_size_m';
import { withSizeS as withButtonSizeS } from '../../Button/_size/Button_size_s';
import { withThemeNormal as withButtonThemeNormal } from '../../Button/_theme/Button_theme_normal@desktop';
import { withViewDefault as withButtonViewDefault } from '../../Button/_view/Button_view_default@desktop';

import { IAttachProps, cnAttach, Attach as AttachDesktop } from '../Attach@desktop';
import { withSizeL } from '../_size/Attach_size_l';
import { withSizeM } from '../_size/Attach_size_m';
import { withSizeS } from '../_size/Attach_size_s';

import './HermioneSample.components/Hermione/Hermione.css';

configureRootTheme({ theme: themeDefault });

const Button = compose(
    withButtonThemeNormal,
    withButtonViewDefault,
    composeU(withButtonSizeL, withButtonSizeM, withButtonSizeS),
)(ButtonDesktop);

const attachRegistry = new Registry({ id: cnAttach() });
attachRegistry.set('Button', Button);

interface IAttachEnhancedProps extends IAttachProps {
    style?: CSSProperties;
}

const Attach = compose(
    composeU(withSizeL, withSizeM, withSizeS),
    withRegistry(attachRegistry),
)(AttachDesktop as ComponentType<IAttachEnhancedProps>);

const extensions = [
    'none',
    'zip',
    'rar',
    'tar',
    'gz',
    '7z',
    'flv',
    'm4a',
    'ogg',
    'gif',
    'jpg',
    'png',
    'eml',
    'exe',
    'mov',
    'wmv',
    'mp4',
    'avi',
    'xls',
    'doc',
    'txt',
    'pdf',
    'ppt',
    'mp3',
    'wav',
    'wma',
];

class AttachHermioneSample extends PureComponent {
    inputRefs: { [key in string]: RefObject<HTMLInputElement> } = {};

    componentDidMount() {
        setTimeout(() => {
            extensions.forEach((extension) => {
                const event = document.createEvent('HTMLEvents');
                const element = this.inputRefs[extension];

                event.initEvent('change', true, false);

                if (element.current !== null) {
                    Object.defineProperty(element.current, 'value', {
                        value: `dummy.${extension}`,
                    });
                    element.current.dispatchEvent(event);
                }
            });
        }, 200);
    }

    render() {
        return (
            <BPage>
                <Hermione className="Extensions" style={{ padding: 10 }}>
                    <Hermione element="Item">
                        {extensions.map((extension) => (
                            <Attach
                                hasHolder
                                holderText="файл не выбран"
                                controlRef={(this.inputRefs[extension] = createRef())}
                                key={extension}
                                style={{ marginLeft: 5 }}
                                size="s"
                                theme="normal"
                            >
                                Выбрать файл
                            </Attach>
                        ))}
                    </Hermione>
                </Hermione>
                <Hermione className="ClassicDesign">
                    {['s', 'm', 'l'].map((size: any) => (
                        <Hermione key={size} element="Item" style={{ margin: 20 }}>
                            {'Какой-то текст '}
                            <Attach hasHolder holderText="файл не выбран" size={size} theme="normal">
                                Выбрать файл
                            </Attach>
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione className="NewDesign">
                    {['s', 'm', 'l'].map((size: any) => (
                        <Hermione key={size} element="Item" style={{ margin: 20 }}>
                            {'Какой-то текст '}
                            <Attach hasHolder holderText="файл не выбран" size={size} view="default">
                                Выбрать файл
                            </Attach>
                        </Hermione>
                    ))}
                </Hermione>
                <Hermione className="Disabled">
                    <Hermione element="Item" style={{ margin: 20 }}>
                        {'Какой-то текст '}
                        <Attach hasHolder holderText="файл не выбран" disabled size="s" theme="normal">
                            Выбрать файл
                        </Attach>
                    </Hermione>
                </Hermione>
                <Hermione className="Fixed">
                    <Hermione element="Item" style={{ margin: 20 }}>
                        <Attach hasHolder holderText="файл не выбран" holderTextWidth={30} size="m" theme="normal">
                            Выбрать файл
                        </Attach>
                    </Hermione>
                </Hermione>
            </BPage>
        );
    }
}

render(<AttachHermioneSample />, document.getElementById('root'));
