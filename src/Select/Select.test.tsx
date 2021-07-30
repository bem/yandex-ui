import React, { createRef, ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';
import { withRegistry, Registry } from '@bem-react/di';
import { compose } from '@bem-react/core';

import { serverEnvironmentSetup, delay } from '../internal/utils';

import { Popup } from '../Popup/Popup@desktop';
import { Menu } from '../Menu/Menu@desktop';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button@desktop';
import { Keys } from '../lib/keyboard';

import { withTogglable } from '../withTogglable/withTogglable';
import { cnSelect, Select as SelectCommon } from './Select';
import { Select as SelectDesktop } from './Select@desktop';
import { Select as SelectTouchPad } from './Select@touch-pad';
import { Select as SelectTouchPhone } from './Select@touch-phone';
import { jestEnvironmentSetup } from '../internal/utils/jestEnvironmentSetup';

const selectRegistry = new Registry({ id: cnSelect() });

selectRegistry
    .set('Trigger', Button)
    .set('Popup', Popup)
    .set('Menu', Menu)
    .set('Icon', Icon);

const platforms = [
    [
        'desktop',
        compose(
            withRegistry(selectRegistry),
            withTogglable,
        )(SelectDesktop),
    ],
    ['touch-pad', withRegistry(selectRegistry)(SelectTouchPad)],
    ['touch-phone', withRegistry(selectRegistry)(SelectTouchPhone)],
];

type SelectProps = ExtractProps<typeof SelectDesktop>;

describe.each<any>(platforms)('Select@%s', (platform, Select: ComponentType<SelectProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                render(<Select options={[{ value: '1', content: 'Тест' }]} id="serverTemplateId" className="mix" />),
            ).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        jestEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(
                mount(<Select options={[{ value: '1', content: 'Тест' }]} id="clientTemplateId" className="mix" />),
            ).toMatchSnapshot();
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLElement>();
            mount(<Select options={[{ value: '1', content: 'Тест' }]} innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });

        test('должен быть установлен корректный displayName', () => {
            expect(SelectCommon.displayName).toBe('Select2');
        });

        test('должен рендерить контент в addonAfter и addonBefore', () => {
            const wrapper = mount(
                <Select
                    options={[{ value: '1', content: '' }]}
                    addonAfter={<i className="after" />}
                    addonBefore={<i className="before" />}
                />,
            );
            expect(wrapper.find('.after')).toHaveLength(1);
            expect(wrapper.find('.before')).toHaveLength(1);
        });

        test('на onBlur event вызывается функция, переданная в onBlur', () => {
            const onBlurFn = jest.fn();
            const wrapper = mount(<Select options={[{ value: '1', content: 'Тест' }]} onBlur={onBlurFn} />);
            wrapper
                .find('.Select2-Button')
                .first()
                .simulate('blur');
            expect(onBlurFn.mock.calls.length).toBe(1);
        });

        if (platform === 'desktop') {
            test('при нажатии на ENTER не открывается Select', () => {
                const preventDefault = jest.fn();
                const wrapper = mount(<Select options={[{ value: '1', content: 'test' }]} />);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('keydown', { keyCode: Keys.ENTER, preventDefault });
                expect(preventDefault.mock.calls.length).toBe(1);
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(false);
            });

            test('при нажатии на SPACE, UP и DOWN открывается Select', () => {
                const preventDefault = jest.fn();
                const wrapper = mount(<Select options={[{ value: '1', content: 'test' }]} />);
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(false);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('keydown', { keyCode: Keys.SPACE, preventDefault });
                expect(preventDefault.mock.calls.length).toBe(1);
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(true);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('click');
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(false);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('keydown', { keyCode: Keys.UP, preventDefault });
                expect(preventDefault.mock.calls.length).toBe(2);
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(true);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('click');
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(false);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('keydown', { keyCode: Keys.DOWN, preventDefault });
                expect(preventDefault.mock.calls.length).toBe(3);
                expect(wrapper.find(SelectCommon).prop('opened')).toBe(true);
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('click');
            });

            test('опции прокидываются в Menu', () => {
                const options = [{ value: '1', content: 'test' }];
                const wrapper = mount(<Select options={options} />);
                wrapper
                    .find('.Select2-Button')
                    .first()
                    .simulate('click');
                expect(wrapper.find(Menu).prop('items')).toBe(options);
            });

            test('popupRef прокидывается в Popup', async () => {
                const popupRef = createRef<HTMLDivElement>();
                const wrapper = mount(<Select options={[]} popupRef={popupRef} />);
                // prettier-ignore
                wrapper.find('.Select2-Button').first().simulate('click');
                expect(popupRef.current).toEqual(wrapper.find('.Popup2').getDOMNode());
            });

            test('в Menu пробрасывается value', () => {
                const wrapper = mount(
                    <Select
                        value="red"
                        onChange={() => null}
                        options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                        showAlwaysPlaceholder={false}
                    />,
                );
                wrapper
                    .find('.Select2-Button')
                    .first()
                    .simulate('click');
                expect(wrapper.find(Menu).prop('value')).toBe('red');
            });

            test('opened прокидывается в Popup', () => {
                const wrapper = mount(<Select options={[{ value: '1', content: 'Тест' }]} />);
                wrapper
                    .find('.Select2-Button')
                    .first()
                    .simulate('click');
                expect(wrapper.find(Popup).prop('visible')).toBe(true);
            });

            test('opened прокидывается в Menu', () => {
                const wrapper = mount(<Select options={[{ value: '1', content: 'Тест' }]} />);
                wrapper
                    .find('.Select2-Button')
                    .first()
                    .simulate('click');
                expect(wrapper.find(Menu).prop('focused')).toBe(true);
            });

            test('на изменение пункта меню вызывается onChange', () => {
                const onChangeFn = jest.fn();
                const wrapper = mount(
                    <Select
                        options={[{ value: 'testVal1', content: 'Тест1' }, { value: 'testVal2', content: 'Тест2' }]}
                        onChange={onChangeFn}
                    />,
                );
                wrapper
                    .find('.Select2-Button')
                    .first()
                    .simulate('click');
                wrapper
                    .find('.Menu-Item')
                    .at(0)
                    .simulate('mouseenter')
                    .simulate('click');
                expect(onChangeFn.mock.calls[0][0].target.value).toBe('testVal1');
            });
        }

        test('triggerRef прокидывается в Trigger', async () => {
            const triggerRef = createRef<HTMLElement>();
            const wrapper = mount(
                <Select options={[{ value: '1', content: 'test' }]} theme="m" triggerRef={triggerRef} />,
            );
            await delay(100);
            expect(triggerRef.current).not.toBe(null);
            expect(wrapper.find(Button).prop('innerRef')).toStrictEqual(triggerRef);
        });

        test('placeholder рендерится', () => {
            const wrapper = mount(<Select options={[{ value: '1', content: 'test' }]} placeholder="testplaceholder" />);
            expect(wrapper.find('span.Button2-Text').text()).toBe('testplaceholder');
        });

        test('placeholder рендерится для отсутствующих options', () => {
            const wrapper = mount(
                <Select
                    placeholder="testplaceholder"
                    options={[{ value: '1', content: 'Тест' }]}
                    value={['all']}
                    onChange={() => null}
                />,
            );

            expect(wrapper.find('span.Button2-Text').text()).toBe('testplaceholder');
        });

        test('по умолчанию кнопка мультиселекта с выбранными значениями получает модификатор `checked`', () => {
            const wrapper = mount(<Select options={[{ value: '1', content: 'Тест' }]} value={['1']} />);
            expect(wrapper.find('.Button2_checked')).toHaveLength(1);
        });

        test(
            'кнопка мультиселекта с выбранными значениями не получает модификатор `checked` если опция ' +
                '`check` = `false`',
            () => {
                const wrapper = mount(
                    <Select checkable={false} options={[{ value: '1', content: 'Тест' }]} value={['1']} />,
                );
                expect(wrapper.find('.Button2_checked')).toHaveLength(0);
            },
        );

        test('на клик по Select вызывается функция, переданная в onClick', () => {
            const onClickFn = jest.fn();
            const wrapper = mount(<Select options={[{ value: '1', content: '' }]} onClick={onClickFn} />);
            if (platform === 'desktop') {
                wrapper
                    .find('.Select2-Button')
                    .hostNodes()
                    .simulate('click');
            } else {
                wrapper
                    .find('.Select2-Control')
                    .hostNodes()
                    .simulate('click');
            }
            expect(onClickFn.mock.calls.length).toBe(1);
        });

        test('на событие keyDown вызывается функция, переданная в onKeyDown', () => {
            const onKeyDownFn = jest.fn();
            const preventDefault = jest.fn();
            const wrapper = mount(<Select options={[{ value: '1', content: '' }]} onKeyDown={onKeyDownFn} opened />);
            //открываем Select
            if (platform === 'desktop') {
                wrapper
                    .find('.Select2-Button')
                    .get(0)
                    .props.onClick({ nativeEvent: {} });
            }
            wrapper
                .find('.Select2-Button')
                .first()
                .simulate('keydown', { keyCode: Keys.TAB, preventDefault });
            expect(onKeyDownFn.mock.calls.length).toBe(1);
            expect(onKeyDownFn.mock.calls[0][0].keyCode).toBe(Keys.TAB);
        });

        test('при передаче в value строки компонент работает в режиме radio', () => {
            const wrapper = mount(
                <Select
                    value="red"
                    onChange={() => null}
                    options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                />,
            );
            expect(wrapper.find(Button).prop('checked')).toBe(false);
            expect(wrapper.find(Button).prop('aria-multiselectable')).toBe(false);
        });

        test('при передаче в value строки и установке showAlwaysPlaceholder=false показывается value вместо placeholder', () => {
            const wrapper = mount(
                <Select
                    value="red"
                    options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                    showAlwaysPlaceholder={false}
                    onChange={() => null}
                />,
            );
            expect(wrapper.find('span.Button2-Text').text()).toBe('Каждый');
        });

        test('при передаче в value массива компонент работает в режиме check', () => {
            const wrapper = mount(
                <Select
                    value={['red', 'orange']}
                    onChange={() => null}
                    options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                />,
            );
            expect(wrapper.find(Button).prop('checked')).toBe(true);
            expect(wrapper.find(Button).prop('aria-multiselectable')).toBe(true);
        });

        test('при передаче в value массива и установке showAlwaysPlaceholder=false показывается value вместо placeholder', () => {
            const wrapper = mount(
                <Select
                    value={['red', 'orange']}
                    onChange={() => null}
                    options={[{ value: 'red', content: 'Каждый' }, { value: 'orange', content: 'Охотник' }]}
                    showAlwaysPlaceholder={false}
                />,
            );
            expect(wrapper.find('span.Button2-Text').text()).toBe('Каждый, Охотник');
        });

        test('view прокидывается в Trigger', () => {
            const wrapper = mount(<Select options={[{ value: '1', content: 'test' }]} view="default" />);
            expect(wrapper.find(Button).prop('view')).toBe('default');
        });

        test('disabled прокидывается в Trigger', () => {
            const wrapper = mount(<Select options={[{ value: '1', content: 'test' }]} disabled />);
            expect(wrapper.find('span.Select2_disabled')).toHaveLength(1);
            expect(wrapper.find(Button).prop('disabled')).toBe(true);
        });

        test('style прокидывается в Trigger', () => {
            const styleObj = { color: 'black' };
            const wrapper = mount(<Select options={[{ value: '1', content: 'test' }]} style={styleObj} />);
            expect(wrapper.find(Button).prop('style')).toStrictEqual(styleObj);
        });

        test('при открытии Select должна изменяться иконка Icon', () => {
            const wrapper = mount(<Select options={[{ value: '1', content: 'Тест' }]} />);
            expect(wrapper.find(Icon).prop('direction')).toBe('bottom');

            wrapper
                .find('.Select2-Button')
                .first()
                .simulate('click');
            wrapper.setProps({ opened: true });
            expect(wrapper.find(Icon).prop('direction')).toBe('top');
        });

        test('renderControl рисует select и туда прорастают свойства', () => {
            const wrapper = mount(
                <Select options={[{ value: '1', content: 'test' }]} renderControl name="selectName" />,
            );
            expect(wrapper.find('select').prop('name')).toBe('selectName');
        });
    });
});
