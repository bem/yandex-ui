import React, { createRef, FC, RefObject, useState } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { IWithOutsideClickProps, withOutsideClick } from './withOutsideClick';
import { Nullable } from '../typings/utility-types';
import { delay } from '../internal/utils';
import { Keys } from '../lib/keyboard';

interface IComponentProps extends IWithOutsideClickProps {
    className?: string;
}

const Component: FC<IComponentProps> = ({ visible, targetRef, ...props }) => {
    return (
        <div
            id="wrappedComponent"
            ref={targetRef as RefObject<HTMLDivElement>}
            {...props}
        >
            {visible && (
                <div>
                    Wrapped Component
                </div>
            )}
        </div>
    );
};

const ComponentWithOutsideClick = withOutsideClick(Component);

const ExampleEnviroment: FC<any> = ({ refs, ...props }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div {...props}>
            <button
                ref={refs.toggleBtnRef} id="toggleBtn"
                onClick={() => setVisible(!visible)}
            >
                Anchor
            </button>
            <button
                ref={refs.ignoreBtnRef} id="ignoreBtn"
                onClick={() => refs.toggleBtnRef.current && refs.toggleBtnRef.current.click()}>
                IgnoreElement
            </button>
            <button ref={refs.uselessBtnRef} id="uselessBtn">
                UselessButton
            </button>
            <ComponentWithOutsideClick
                targetRef={refs.componentRef}
                visible={visible}
                ignoreRefs={[refs.toggleBtnRef, refs.ignoreBtnRef]}
                onOutsideClick={() => setVisible(false)}
                onEscapeKeyDown={() => setVisible(false)}
            />
        </div>
    );
};

describe('ComponentWithOutsideClick', () => {
    describe('client environment', () => {
        let wrapper: Nullable<ReactWrapper> = null;

        const outsideClick = (selector: string) => {
            // @ts-ignore
            wrapper.find(selector).simulate('click', { bubbles: true });
            // @ts-ignore
            wrapper.find(selector).instance().dispatchEvent(new Event('mousedown', { bubbles: true }));
            // @ts-ignore
            wrapper.find(selector).instance().dispatchEvent(new Event('mouseup', { bubbles: true }));
        };

        const refs = {
            toggleBtnRef: createRef<HTMLButtonElement>(),
            ignoreBtnRef: createRef<HTMLButtonElement>(),
            uselessBtnRef: createRef<HTMLButtonElement>(),
            componentRef: createRef<HTMLDivElement>(),
        };

        afterEach(() => {
            if (wrapper !== null && wrapper.length > 0) {
                wrapper.unmount();
            }
        });

        test('должен быть установлен корректный displayName', () => {
            expect(ComponentWithOutsideClick.displayName).toBe('withOutsideClick(Component)');
        });

        test('должен скрывать компонент onOutsideClick', async () => {
            wrapper = mount(<ExampleEnviroment refs={refs} />);
            document.addEventListener = jest.fn((event, cb) => {
                wrapper && wrapper.getDOMNode().addEventListener(event, cb);
            });

            act(() => outsideClick('#toggleBtn'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(1);

            act(() => outsideClick('#uselessBtn'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(0);
        });

        test('должен скрывать компонент onEscKeyDown', async () => {
            wrapper = mount(<ExampleEnviroment refs={refs} />);
            document.addEventListener = jest.fn((event, cb) => {
                wrapper && wrapper.getDOMNode().addEventListener(event, cb);
            });

            act(() => outsideClick('#toggleBtn'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(1);

            act(() => {
                // @ts-ignore
                wrapper.getDOMNode().dispatchEvent(new Event('keydown', { keycode: Keys.ESC, bubbles: true }));
            });
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(0);
        });

        test('не должен скрывать компонент onOutsideClick по элементу в ignoreRefs', async () => {
            wrapper = mount(<ExampleEnviroment refs={refs} />);
            document.addEventListener = jest.fn((event, cb) => {
                wrapper && wrapper.getDOMNode().addEventListener(event, cb);
            });

            act(() => outsideClick('#toggleBtn'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(1);

            act(() => outsideClick('#ignoreBtn'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(1);
        });

        test('не должен скрывать компонент по клику в targetRef', async () => {
            wrapper = mount(<ExampleEnviroment refs={refs} />);
            document.addEventListener = jest.fn((event, cb) => {
                wrapper && wrapper.getDOMNode().addEventListener(event, cb);
            });

            act(() => outsideClick('#toggleBtn'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(1);

            act(() => outsideClick('#wrappedComponent'));
            await delay(100);
            expect(wrapper.update().find('#wrappedComponent').children().length).toBe(1);
        });
    });
});
