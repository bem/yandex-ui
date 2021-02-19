/**
 * Модуль для блокировки прокрутки на тач-устройствах.
 * На данный момент включается только для iOS устройств.
 *
 * Базовые сценарии для тестирования.
 *
 * Предотвращение прокрутки на теле документа.
 * 1. Откройте страницу с модальным окном, где содержимое и модальное окно имеет полосу прокрутки.
 * 2. Откройте модальное окно.
 * 4. Прокрутите содержимое модального окна до самого конца.
 * 3. После прокрутки всего содержимого, повторные действия прокрутки не должны
 * вызывать прокрутку тела документа.
 *
 * После закрытия модального окна, смещение прокрутки должно вернуться в положение до открытия.
 * 1. Откройте страницу с модальным окном, где содержимое и модальное окно имеет полосу прокрутки.
 * 2. Прокрутите тело документа немного вниз, чтобы нижняя часть тулбара в Safari исчезла.
 * 3. Откройте модальное окно.
 * 4. Начните прокрутку, начиная движение пальцем с того места, где был тулбар.
 * 5. Убедитесь, что прокрутка сработала на теле документа, а не на модальном окне.
 * 6. Закройте модальное окно и убедитесь, что прокрутка вернулась в исходное положение.
 */
import { getScrollParent, isPassiveEventsSupported, isRootHTMLElement } from './utils';

interface ScrollLockState {
    count: number;
    lastY: number;
    scrollable: HTMLElement | null;
    scrollX: number;
    scrollY: number;
}

const LISTENER_OPTIONS = isPassiveEventsSupported() ? { passive: false } : undefined;

const state: ScrollLockState = {
    count: 0,
    lastY: 0,
    scrollable: null,
    scrollX: 0,
    scrollY: 0,
};

function onTouchStart(event: TouchEvent) {
    if (event.changedTouches.length === 1) {
        state.scrollable = getScrollParent(event.target as HTMLElement);

        if (isRootHTMLElement(state.scrollable)) {
            return;
        }

        state.lastY = event.changedTouches[0].pageY;
    }
}

function onTouchMove(event: TouchEvent) {
    const { scrollable, lastY } = state;

    if (event.changedTouches.length > 1) {
        return;
    }

    if (!scrollable || isRootHTMLElement(scrollable)) {
        event.preventDefault();
        return;
    }

    const y = event.changedTouches[0].pageY;
    const top = scrollable.scrollTop;
    const bottom = scrollable.scrollHeight - scrollable.clientHeight;

    if ((top <= 0 && y > lastY) || (top >= bottom && y < lastY)) {
        event.preventDefault();
    }

    state.lastY = y;
}

function onTouchEnd() {
    if (state.scrollable) {
        state.scrollable = null;
    }
}

export function lock(container: HTMLElement) {
    if (!isRootHTMLElement(container)) {
        return;
    }

    state.count++;

    if (state.count === 1) {
        state.scrollX = window.pageXOffset;
        state.scrollY = window.pageYOffset;

        document.addEventListener('touchstart', onTouchStart, LISTENER_OPTIONS);
        document.addEventListener('touchmove', onTouchMove, LISTENER_OPTIONS);
        document.addEventListener('touchend', onTouchEnd, LISTENER_OPTIONS);
    }
}

export function unlock(container: HTMLElement) {
    if (!isRootHTMLElement(container) || state.count === 0) {
        return;
    }

    state.count--;

    if (state.count === 0) {
        document.removeEventListener('touchstart', onTouchStart);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);

        window.scrollTo(state.scrollX, state.scrollY);
    }
}
