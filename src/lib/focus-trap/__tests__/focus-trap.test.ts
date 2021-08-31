import { getByTestId } from '../../../internal/testing';
import { getTabbables } from '../tabbable';
import { createGuard, isFocusFree, isGuard, focusFirstIn, getNextTabbableIndex } from '../utils';
import { basicFixture } from './fixtures';

describe('focus-trap', () => {
    describe('isFocusFree', () => {
        test('должен вернуть `true` если фокус находится на `body`', () => {
            const focusable = document.createElement('button');
            document.body.appendChild(focusable);

            focusable.focus();
            expect(isFocusFree()).toBe(false);

            focusable.blur();
            expect(isFocusFree()).toBe(true);

            document.body.removeChild(focusable);
        });
    });

    describe('isGuard', () => {
        test('должен вернуть `true` если элемент является границей фокуса', () => {
            const focusable = document.createElement('button');
            expect(isGuard(focusable)).toBe(false);

            const guard = createGuard(0);
            expect(isGuard(guard)).toBe(true);
        });
    });

    describe('focusFirstIn', () => {
        test('должен выставить фокус первому tabbable-элементу, который не является границей фокуса', () => {
            const guard = createGuard(1);
            const tabbable = document.createElement('button');
            document.body.appendChild(guard);
            document.body.appendChild(tabbable);

            focusFirstIn(document.body);
            expect(tabbable).toHaveFocus();

            document.body.removeChild(guard);
            document.body.removeChild(tabbable);
        });
    });

    describe('getNextTabbableIndex', () => {
        test('должен вернуть нулевой индекс, если текущий равен `-1`', () => {
            expect(getNextTabbableIndex(-1, 5, 0)).toBe(0);
        });

        test('должен вернуть нулевой индекс, если текущий индекс равен последнему и шаг равен `1`', () => {
            expect(getNextTabbableIndex(4, 5, 1)).toBe(0);
        });

        test('должен вернуть последний индекс, если текущий индекс равен первому и шаг равен `-1`', () => {
            expect(getNextTabbableIndex(0, 5, -1)).toBe(4);
        });

        test('должен вернуть `-1`, если `count=0`', () => {
            expect(getNextTabbableIndex(20, 0, 1)).toBe(-1);
        });

        test('должен вернуть следующий индекс, относительно текущего', () => {
            expect(getNextTabbableIndex(5, 10, 1)).toBe(6);
            expect(getNextTabbableIndex(5, 10, -1)).toBe(4);
        });
    });

    describe('getTabbables', () => {
        test('должен вернуть tabbable-элементы внутри контейнера', () => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = basicFixture;
            document.body.appendChild(wrapper);

            // https://github.com/jsdom/jsdom/issues/1670
            const divContentEditableTrue = getByTestId(wrapper, 'div-contenteditable-true');
            const divContentEditableFalse = getByTestId(wrapper, 'div-contenteditable-false');
            const divContentEditableNesting = getByTestId(wrapper, 'div-contenteditable-nesting');
            divContentEditableTrue.contentEditable = 'true';
            divContentEditableFalse.contentEditable = 'false';
            divContentEditableNesting.contentEditable = 'true';

            const tabbables = getTabbables(wrapper);

            expect(tabbables.map((node) => node.dataset.testid)).toMatchSnapshot();

            document.body.removeChild(wrapper);
        });

        test('должен отфильтровать tabbable-элементы', () => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = basicFixture;
            document.body.appendChild(wrapper);

            const tabbables = getTabbables(wrapper, (node) => {
                return node.tagName === 'BUTTON';
            });

            expect(tabbables.map((node) => node.dataset.testid)).toMatchSnapshot();

            document.body.removeChild(wrapper);
        });
    });
});
