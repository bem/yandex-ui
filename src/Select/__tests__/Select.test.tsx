import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Keys } from '../../lib/keyboard';
import { Select as SelectCommon } from '../Select';
import { Select as SelectDesktop } from '../desktop/bundle';
import { Select as SelectTouchPad } from '../touch-pad/bundle';
import { Select as SelectTouchPhone } from '../touch-phone/bundle';

const platforms = [
    ['desktop', SelectDesktop],
    ['touch-pad', SelectTouchPad],
    ['touch-phone', SelectTouchPhone],
] as const;

describe.each(platforms)('Select@%s', (platform, Select) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Select options={[{ value: '1', content: 'Тест' }]} id="clientTemplateId" className="mix" />,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLElement>();
        render(<Select options={[{ value: '1', content: 'Тест' }]} innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен быть установлен корректный displayName', () => {
        expect(SelectCommon.displayName).toBe('Select2');
    });

    test('должен рендерить контент в addonAfter и addonBefore', () => {
        render(
            <Select
                options={[{ value: '1', content: '' }]}
                addonAfter={<i data-testid="after" />}
                addonBefore={<i data-testid="before" />}
            />,
        );

        expect(screen.getByTestId('after')).toBeInTheDocument();
        expect(screen.getByTestId('before')).toBeInTheDocument();
    });

    test('на onBlur event вызывается функция, переданная в onBlur', () => {
        const onBlurFn = jest.fn();
        render(<Select options={[{ value: '1', content: 'Тест' }]} onBlur={onBlurFn} />);

        fireEvent.blur(screen.getByRole('listbox'));

        expect(onBlurFn).toBeCalledTimes(1);
    });

    if (platform === 'desktop') {
        test('при нажатии на ENTER не открывается Select', () => {
            const preventDefault = jest.spyOn(KeyboardEvent.prototype, 'preventDefault');
            render(<Select options={[{ value: '1', content: 'test' }]} />);

            fireEvent.keyDown(screen.getByRole('listbox'), { keyCode: Keys.ENTER });

            expect(preventDefault).toBeCalledTimes(1);
            expect(screen.getByRole('listbox')).toHaveAttribute('aria-expanded', 'false');

            preventDefault.mockReset();
        });

        test.each`
            name       | keyCode
            ${'SPACE'} | ${Keys.SPACE}
            ${'UP'}    | ${Keys.UP}
            ${'DOWN'}  | ${Keys.DOWN}
        `('при нажатии на $name открывается Select', ({ keyCode }) => {
            const preventDefault = jest.spyOn(KeyboardEvent.prototype, 'preventDefault');
            render(<Select options={[{ value: '1', content: 'test' }]} />);

            expect(screen.getByRole('listbox')).toHaveAttribute('aria-expanded', 'false');

            fireEvent.keyDown(screen.getByRole('listbox'), { keyCode });

            expect(preventDefault).toBeCalledTimes(1);
            expect(screen.getByRole('listbox')).toHaveAttribute('aria-expanded', 'true');

            fireEvent.click(screen.getByRole('listbox'));

            expect(screen.getByRole('listbox')).toHaveAttribute('aria-expanded', 'false');

            preventDefault.mockReset();
        });

        test('опции прокидываются в Menu', () => {
            const items = [{ value: '1', content: 'test' }];
            const renderMenu = jest.fn(() => null);
            render(<Select options={items} renderMenu={renderMenu} />);

            fireEvent.click(screen.getByRole('listbox'));

            expect(renderMenu).toHaveBeenCalledWith(expect.objectContaining({ items }), expect.anything());
        });

        test('popupRef прокидывается в Popup', async () => {
            const popupRef = createRef<HTMLDivElement>();
            const { container } = render(<Select options={[]} popupRef={popupRef} />);

            fireEvent.click(screen.getByRole('listbox'));

            expect(popupRef.current).not.toBeNull();
            expect(container.querySelector('.Select2-Popup')).toStrictEqual(popupRef.current);
        });

        test('в Menu пробрасывается value', () => {
            const renderMenu = jest.fn(() => null);
            render(
                <Select
                    value="red"
                    onChange={() => null}
                    options={[
                        { value: 'red', content: 'Каждый' },
                        { value: 'orange', content: 'Охотник' },
                    ]}
                    showAlwaysPlaceholder={false}
                    renderMenu={renderMenu}
                />,
            );

            fireEvent.click(screen.getByRole('listbox'));

            expect(renderMenu).toHaveBeenCalledWith(expect.objectContaining({ value: 'red' }), expect.anything());
        });

        test('opened прокидывается в Popup', () => {
            const { container } = render(<Select options={[{ value: '1', content: 'Тест' }]} />);

            fireEvent.click(screen.getByRole('listbox'));

            expect(container.querySelector('.Select2-Popup')).toHaveClass('Popup2_visible');
        });

        test('focused прокидывается в Menu', () => {
            const renderMenu = jest.fn(() => null);
            render(<Select options={[{ value: '1', content: 'Тест' }]} renderMenu={renderMenu} />);

            fireEvent.click(screen.getByRole('listbox'));

            expect(renderMenu).toHaveBeenCalledWith(expect.objectContaining({ focused: true }), expect.anything());
        });

        test('на изменение пункта меню вызывается onChange', () => {
            const onChangeFn = jest.fn();
            render(
                <Select
                    options={[
                        { value: 'testVal1', content: 'Тест1' },
                        { value: 'testVal2', content: 'Тест2' },
                    ]}
                    onChange={onChangeFn}
                />,
            );

            fireEvent.click(screen.getByRole('listbox'));
            const item = screen.getByText('Тест1');
            fireEvent.mouseEnter(item);
            fireEvent.click(item);

            expect(onChangeFn.mock.calls[0][0].target.value).toBe('testVal1');
        });
    }

    test('triggerRef прокидывается в Trigger', () => {
        const triggerRef = createRef<HTMLElement>();
        render(
            <Select
                options={[{ value: '1', content: 'test' }]}
                theme="m"
                triggerRef={triggerRef}
                renderTrigger={({ innerRef }) => {
                    return <button ref={innerRef} data-testid="trigger" />;
                }}
            />,
        );

        expect(triggerRef.current).not.toBe(null);
        expect(screen.getByTestId('trigger')).toStrictEqual(triggerRef.current);
    });

    test('placeholder рендерится', () => {
        render(<Select options={[{ value: '1', content: 'test' }]} placeholder="testplaceholder" />);

        expect(screen.getByText('testplaceholder')).toBeInTheDocument();
    });

    test('placeholder рендерится для отсутствующих options', () => {
        render(
            <Select
                placeholder="testplaceholder"
                options={[{ value: '1', content: 'Тест' }]}
                value={['all']}
                onChange={() => null}
            />,
        );

        expect(screen.getByText('testplaceholder')).toBeInTheDocument();
    });

    test('по умолчанию кнопка мультиселекта с выбранными значениями получает модификатор `checked`', () => {
        render(<Select options={[{ value: '1', content: 'Тест' }]} value={['1']} onChange={() => null} />);

        expect(screen.getAllByRole('listbox')[0]).toHaveClass('Button2_checked');
    });

    test('кнопка мультиселекта с выбранными значениями не получает модификатор `checked` если опция `check` = `false`', () => {
        render(
            <Select
                checkable={false}
                options={[{ value: '1', content: 'Тест' }]}
                value={['1']}
                onChange={() => null}
            />,
        );

        expect(screen.getAllByRole('listbox')[0]).not.toHaveClass('Button2_checked');
    });

    test('на клик по Select вызывается функция, переданная в onClick', () => {
        const onClickFn = jest.fn();
        render(<Select options={[{ value: '1', content: '' }]} onClick={onClickFn} />);

        if (platform === 'desktop') {
            fireEvent.click(screen.getByRole('listbox'));
        } else {
            fireEvent.click(screen.getByRole('combobox'));
        }

        expect(onClickFn).toBeCalledTimes(1);
    });

    test('на событие keyDown вызывается функция, переданная в onKeyDown', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onKeyDownFn = jest.fn((e) => e.persist());
        render(<Select options={[{ value: '1', content: '' }]} onKeyDown={onKeyDownFn} opened />);

        fireEvent.keyDown(screen.getAllByRole('listbox')[0], { keyCode: Keys.TAB });

        expect(onKeyDownFn).toBeCalledTimes(1);
        expect(onKeyDownFn.mock.calls[0][0].keyCode).toBe(Keys.TAB);
    });

    test('при передаче в value строки компонент работает в режиме radio', () => {
        render(
            <Select
                value="red"
                onChange={() => null}
                options={[
                    { value: 'red', content: 'Каждый' },
                    { value: 'orange', content: 'Охотник' },
                ]}
            />,
        );

        expect(screen.getAllByRole('listbox')[0]).toHaveAttribute('aria-multiselectable', 'false');
    });

    test('при передаче в value строки и установке showAlwaysPlaceholder=false показывается value вместо placeholder', () => {
        render(
            <Select
                value="red"
                options={[
                    { value: 'red', content: 'Каждый' },
                    { value: 'orange', content: 'Охотник' },
                ]}
                showAlwaysPlaceholder={false}
                onChange={() => null}
            />,
        );

        expect(screen.getAllByRole('listbox')[0]).toHaveTextContent('Каждый');
    });

    test('при передаче в value массива компонент работает в режиме check', () => {
        render(
            <Select
                value={['red', 'orange']}
                onChange={() => null}
                options={[
                    { value: 'red', content: 'Каждый' },
                    { value: 'orange', content: 'Охотник' },
                ]}
            />,
        );

        expect(screen.getAllByRole('listbox')[0]).toHaveAttribute('aria-multiselectable', 'true');
    });

    test('при передаче в value массива и установке showAlwaysPlaceholder=false показывается value вместо placeholder', () => {
        render(
            <Select
                value={['red', 'orange']}
                onChange={() => null}
                options={[
                    { value: 'red', content: 'Каждый' },
                    { value: 'orange', content: 'Охотник' },
                ]}
                showAlwaysPlaceholder={false}
            />,
        );

        expect(screen.getAllByRole('listbox')[0]).toHaveTextContent('Каждый, Охотник');
    });

    test('view прокидывается в Trigger', () => {
        const renderTrigger = jest.fn(() => null);
        render(<Select options={[{ value: '1', content: 'test' }]} view="default" renderTrigger={renderTrigger} />);

        expect(renderTrigger).toBeCalledWith(expect.objectContaining({ view: 'default' }), expect.anything());
    });

    test('disabled прокидывается в Trigger', () => {
        const { container } = render(<Select options={[{ value: '1', content: 'test' }]} disabled />);

        expect(screen.getByRole('listbox')).toBeDisabled();
        expect(container.firstChild).toHaveClass('Select2_disabled');
    });

    test('style прокидывается в Trigger', () => {
        const styleObj = { color: 'black' };
        render(<Select options={[{ value: '1', content: 'test' }]} style={styleObj} />);

        expect(screen.getByRole('listbox')).toHaveStyle(styleObj);
    });

    test('при открытии Select должна изменяться иконка Icon', () => {
        const renderTriggerIcon = jest.fn(() => null);
        const { setProps } = render(
            <Select options={[{ value: '1', content: 'Тест' }]} renderTriggerIcon={renderTriggerIcon} />,
        );

        expect(renderTriggerIcon).toBeCalledWith(expect.objectContaining({ direction: 'bottom' }), expect.anything());

        setProps({ opened: true });

        expect(renderTriggerIcon).toBeCalledWith(expect.objectContaining({ direction: 'top' }), expect.anything());
    });

    test('renderControl рисует select и туда прорастают свойства', () => {
        render(<Select options={[{ value: '1', content: 'test' }]} renderControl name="selectName" />);

        expect(screen.getByRole('combobox', { hidden: true })).toHaveAttribute('name', 'selectName');
    });
});
