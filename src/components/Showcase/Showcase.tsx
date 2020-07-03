import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useComponentRegistry } from '@bem-react/di';

import { Theme, cnTheme } from '../../Theme';
import { IShowcaseRegistry } from './Showcase.registry';
import './Showcase.css';

export const cnShowcase = cn('Showcase');

export interface IShowcaseProps {
    theme: Theme;
}

const options = [
    { label: 'Радио 1', value: 'value1' },
    { label: 'Радио 2', value: 'value2' },
    { label: 'Радио 3', value: 'value3' },
];

const pinArray = ['brick-brick', 'clear-clear', 'round-round'] as any;

const pinButtonArray = [...pinArray, 'circle-circle'];
const sizesSpin = ['l', 'm', 's', 'xs', 'xxs'] as any;

const url = 'https://yandex.ru';

const menuItems = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где', disabled: true },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];
const menuSize = 'm' as any;
const iconTypeArray = ['arrow', 'filter', 'close', 'cross', 'cross-websearch'];
const iconGlyphArray = [
    'carets-v',
    'type-arrow',
    'type-check',
    'type-close',
    'type-cross',
    'type-cross-websearch',
    'type-filter',
    'type-tick',
    'x-sign',
];

const linkThemes = [
    'black',
    'ghost',
    'normal',
    'outer',
    'pseudo',
    'strong',
    'black',
    'ghost',
    'normal',
    'outer',
    'pseudo',
    'strong',
];

/**
 * Витрина компонентов @yandex-lego/components
 */
export const Showcase: FC<IShowcaseProps> = ({ theme }) => {
    const {
        Attach,
        Button,
        Icon,
        Checkbox,
        Image,
        Link,
        Progress,
        Spin,
        Textarea,
        Textinput,
        TabsMenu,
        TabsPanes,
        Radiobox,
        Select,
        Menu,
        UserPic,
    } = useComponentRegistry<IShowcaseRegistry>(cnShowcase());

    const tabs = [
        { id: 'tab1', content: <Link theme="normal">Поиск</Link> },
        { id: 'tab2', content: <Link theme="normal">Картинки</Link> },
        { id: 'tab3', disabled: true, content: <Link theme="normal">Видео</Link> },
        { id: 'tab4', content: <Link theme="normal">Карты</Link> },
        { id: 'tab5', content: <Link theme="normal">Музыка</Link> },
    ];

    return (
        <>
            <div className={cnShowcase(null, [cnTheme(theme)])}>
                <h2>Showcase color {theme.color}</h2>
                <p>Это стенд для отрисовки, компоненты stateless</p>
                <div className={cnShowcase('Group')}>
                    <h3>Attach</h3>
                    <Attach hasHolder holderText="Attach с элементом Holder" size="m" view="default">Выбрать файл</Attach>
                    <Attach disabled size="s" view="default">Выбрать файл</Attach>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Button</h3>
                    {pinButtonArray.map((pin: any) => (
                        <>
                            <div className={cnShowcase('Row')}>
                                <Button pin={pin} view="clear" size="m">
                                    view clear
                                </Button>
                                <Button pin={pin} view="link" size="s">
                                    view link
                                </Button>
                                <Button pin={pin} view="default" size="m">
                                    view default
                                </Button>
                                <Button pin={pin} view="action" size="l">
                                    view action
                                </Button>
                            </div>
                        </>
                    ))}
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Checkbox</h3>
                    <div className={cnShowcase('Row')}>
                        <Checkbox view="default" size="m" />
                        <Checkbox disabled view="default" size="m" label="Недоступно" />
                        <Checkbox checked view="default" size="s" />
                    </div>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Icon</h3>
                    <div className={cnShowcase('Row')}>
                        {iconTypeArray.map((iconType) => (
                            <Icon key={iconType} type={iconType as any} size="l" direction="left" />
                        ))}
                    </div>
                    <div className={cnShowcase('Row')}>
                        {iconGlyphArray.map((iconGlyph) => (
                            <Icon key={iconGlyph} glyph={iconGlyph as any} size="l" />
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Image</h3>
                    <Image src="https://yastatic.net/s3/frontend/_/KRVa1hWm.svg" alt="Логотип Яндекса" width={200} />
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Link</h3>
                    <div>
                        {linkThemes.map((linkTheme) => (
                            <>
                                <Link href={url} theme={linkTheme as any}>
                                    _theme_{linkTheme}
                                </Link>
                                <br />
                            </>
                        ))}
                    </div>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Menu</h3>
                    <div>
                        <Menu view="default" width="max" items={menuItems} size={menuSize} />
                    </div>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Radiobox</h3>
                    <>
                        <Radiobox value="value1" view="default" options={options} size="m" />
                        <Radiobox value="value1" view="default" options={options} size="s" />
                    </>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Progress</h3>
                    <div>
                        <Progress value={0.33} />
                        <br />
                        <Progress value={0.66} />
                        <br />
                        <Progress value={1} />
                    </div>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Select</h3>
                    <div className={cnShowcase('Row') + ' Scope'}>
                        <Select
                            value="red"
                            options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                            view="default"
                            size="m"
                        />
                        <Select
                            value="red"
                            options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                            view="default"
                            size="s"
                        />
                    </div>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Spin</h3>
                    <div className={cnShowcase('Row')}>
                        {sizesSpin.map((size: 's' | 'm' | 'xs' | 'l' | 'xxs') => (
                            <Spin key={size} progress size={size} view="default" />
                        ))}
                    </div>
                </div>
                <div>
                    <h3>TabsMenu</h3>
                    <>
                        <TabsMenu view="default" layout="horiz" size="m" activeTab="tab1" tabs={tabs} />
                    </>
                </div>
                <div>
                    <h3>TabsPanes</h3>
                    <>
                        <TabsMenu layout="horiz" size="m" activeTab="tab2" view="default" tabs={tabs} />
                        <TabsPanes
                            activePane="tab2"
                            panes={[
                                { id: 'tab1', content: 'Pane 1 Поиск' },
                                { id: 'tab2', content: 'Pane 2 Картинки' },
                                { id: 'tab6', content: 'Pane 4 Маркет' },
                            ]}
                        />
                    </>
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Textinput</h3>
                    {pinArray.map((pin: any) => (
                        <>
                            <Textinput size="m" pin={pin} view="default" placeholder="Textinput" />
                            <Textinput size="m" pin={pin} type="number" view="default" placeholder="Textinput" />
                        </>
                    ))}
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>Textarea</h3>
                    <Textarea size="m" placeholder="Textarea" view="default" />
                    <Textarea disabled size="s" placeholder="Textarea" view="default" />
                </div>
                <div className={cnShowcase('Group')}>
                    <h3>UserPic</h3>
                    <div>
                        <UserPic plus avatarId="43978/351415393-30646433" />
                    </div>
                </div>
            </div>
        </>
    );
};
