import React, { createRef } from 'react';
import { withRegistry, Registry } from '@bem-react/di';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { delay } from '../../internal/utils';
import { Control } from '../Control/Attach-Control';
import { cnAttach, Attach as AttachCommon } from '../Attach';
import { Attach as AttachDesktop } from '../desktop';
import { Attach as AttachTouchPad } from '../touch-pad';
import { Attach as AttachTouchPhone } from '../touch-phone';
import { Button as ButtonDesktop } from '../../Button/desktop';
import { Button as ButtonTouchPad } from '../../Button/touch-pad';
import { Button as ButtonTouchPhone } from '../../Button/touch-phone';

const attachDesktopRegistry = new Registry({ id: cnAttach() });
const attachTouchPadRegistry = new Registry({ id: cnAttach() });
const attachTouchPhoneRegistry = new Registry({ id: cnAttach() });

const ControlWithTestId = (props: any) => {
    return <Control {...props} data-testid="control" />;
};

attachDesktopRegistry.set('Button', ButtonDesktop);
attachDesktopRegistry.set('Control', ControlWithTestId);
attachTouchPadRegistry.set('Button', ButtonTouchPad);
attachTouchPadRegistry.set('Control', ControlWithTestId);
attachTouchPhoneRegistry.set('Button', ButtonTouchPhone);
attachTouchPhoneRegistry.set('Control', ControlWithTestId);

const platforms = [
    ['desktop', withRegistry(attachDesktopRegistry)(AttachDesktop)],
    ['touch-pad', withRegistry(attachTouchPadRegistry)(AttachTouchPad)],
    ['touch-phone', withRegistry(attachTouchPhoneRegistry)(AttachTouchPhone)],
] as const;

describe.each(platforms)('Attach@%s', (_platform, Attach) => {
    const render = createClientRender();

    function triggerChange(element: Element, value: string) {
        // NOTE: Если прокидывать value в событии, то будет ошибка:
        // InvalidStateError: This input element accepts a filename,
        // which may only be programmatically set to the empty string
        Object.defineProperty(element, 'value', {
            value,
            writable: true,
        });

        fireEvent.change(element);
    }

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Attach hasHolder holderText="файл не выбран" id="100500" className="mix">
                Выбрать файл
            </Attach>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(AttachCommon.displayName).toBe('Attach');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLElement>();
        render(<Attach innerRef={innerRef}>Выбрать файл</Attach>);

        await delay(100);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать ссылку на нативный DOM инпут', async () => {
        const controlRef = createRef<HTMLInputElement>();
        render(<Attach controlRef={controlRef}>Выбрать файл</Attach>);

        await delay(100);

        expect(controlRef.current).not.toBe(null);
    });

    test('должен устанавливать текст в элементах Button-Text и Attach-Text', () => {
        render(
            <Attach hasHolder holderText="Holder text">
                Button text
            </Attach>,
        );

        expect(screen.queryByText('Button text')).toBeInTheDocument();
        expect(screen.queryByText('Holder text')).toBeInTheDocument();
    });

    test('должен устанавливать ширину текста в элементе Attach-Text', () => {
        render(
            <Attach hasHolder holderText="файл не выбран" holderTextWidth={40}>
                Выбрать файл
            </Attach>,
        );

        triggerChange(screen.getByTestId('control'), 'file.png');

        expect(screen.getByText('file.png')).toHaveStyle({
            width: '40px',
        });
    });

    test('должен вызывать событие onChange с event при выборе файла', () => {
        // TODO: при переходе на 17 реакт `e.persist` убрать
        const onChange = jest.fn((e) => e.persist());
        render(<Attach onChange={onChange}>Выбрать файл</Attach>);

        triggerChange(screen.getByTestId('control'), 'file.png');

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('file.png');
    });

    test('должен вызывать событие onClearClick & onChange при клике в reset', () => {
        const onChange = jest.fn();
        const onClearClick = jest.fn();

        const { setProps } = render(
            <Attach hasHolder holderText="файл не выбран" onClearClick={onClearClick}>
                Выбрать файл
            </Attach>,
        );

        triggerChange(screen.getByTestId('control'), 'file.png');
        setProps({ onChange });

        // TODO: Так делать не стоит, но выбора нет. Нужно рефакторить сами компоненты
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const reset = document.querySelector('.Attach-Reset')!;
        fireEvent.click(reset);

        expect(onClearClick).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('');
    });

    test('должен устанавливать свойство accept', () => {
        const acceptType = 'image/*';
        render(<Attach accept={acceptType}>Выбрать файл</Attach>);

        expect(screen.getByTestId('control')).toHaveAttribute('accept', acceptType);
    });
});
