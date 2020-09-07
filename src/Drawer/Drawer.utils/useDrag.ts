import { RefObject, useCallback, useLayoutEffect, useRef } from 'react';
import { noop } from './noop';

/**
 * Опции для подписки на события
 */
const listenerOptions = {
    passive: false,
    capture: false,
};

/**
 * Вектор, выраженный двумя координатами
 */
type Vector = { x: number; y: number };

/**
 * Объект состояния жеста, передается единственным аргументом в колбек
 */
interface GestureState<T> {
    /**
     * Координаты пальца пользователя в момент предыдущего срабатывания функции
     */
    previousPosition: Vector;

    /**
     * Координаты пальца пользователя в данный момент
     */
    currentPosition: Vector;

    /**
     * Координаты начала жеста
     */
    initialPosition: Vector;

    /**
     * Сдвиг по каждой из осей с момента начала жеста
     */
    movement: Vector;

    /**
     * Расстояние, пройденное с момента предыдущего вызова функции
     */
    delta: Vector;

    /**
     * Время начала жеста (timestamp)
     */
    startTime: number;

    /**
     * Длительность жеста
     */
    elapsedTime: number;

    /**
     * Признак начала жеста
     */
    first: boolean;

    /**
     * Признак окончания жеста
     */
    last: boolean;

    /**
     * Скорость движения пальца по каждой из осей
     */
    velocity: Vector;

    /**
     * Исходный объект события
     */
    event: TouchEvent;

    /**
     * Пользовательские данные
     */
    data: T;
}

/**
 * Тип колбека
 */
type StateChangeCallback<T> = (arg: Readonly<GestureState<T>>) => void;

/**
 * Предоставляет унифицированный интерфейс для работы с
 * простыми тачевыми событиями (где используется один палец)
 */
export const useDrag = <T>(elementRef: RefObject<HTMLElement>, onStateChange: StateChangeCallback<T>) => {
    const touchIdentifierRef = useRef<number>();
    const gestureStateRef = useRef<GestureState<T>>();
    const onStateChangeRef = useRef<StateChangeCallback<T>>();

    const handler = useCallback(
        (event: TouchEvent) => {
            const onStateChange = onStateChangeRef.current || noop;
            let state = gestureStateRef.current;
            let touch = Array.from(event.changedTouches).find((item) => item.identifier === touchIdentifierRef.current);

            if (!state && event.type === 'touchstart' && event.changedTouches.length === 1) {
                touch = event.changedTouches[0];

                touchIdentifierRef.current = touch.identifier;

                gestureStateRef.current = state = {
                    first: true,
                    last: false,
                    startTime: event.timeStamp,
                    initialPosition: { x: touch.clientX, y: touch.clientY },
                    data: {},
                } as GestureState<T>;
            }

            if (state && touch) {
                // всегда обновляем ссылку на объект исходного события
                state.event = event;

                // сохраняет координаты предыдущего вызова функции
                if (event.type === 'touchmove') {
                    state.first = false;
                    state.previousPosition = state.currentPosition;
                }

                if (event.type === 'touchstart' || event.type === 'touchmove') {
                    state.currentPosition = {
                        x: touch.clientX,
                        y: touch.clientY,
                    };
                    state.movement = {
                        x: state.currentPosition.x - state.initialPosition.x,
                        y: state.currentPosition.y - state.initialPosition.y,
                    };
                    state.delta = {
                        x: state.currentPosition.x - (state.previousPosition || state.initialPosition).x,
                        y: state.currentPosition.y - (state.previousPosition || state.initialPosition).y,
                    };
                    state.velocity = {
                        x: state.delta.x / (event.timeStamp - state.startTime - state.elapsedTime) || 0,
                        y: state.delta.y / (event.timeStamp - state.startTime - state.elapsedTime) || 0,
                    };
                    state.elapsedTime = event.timeStamp - state.startTime;
                }

                // жест завершен пользователем или был прекращен системой
                if (event.type === 'touchend' || event.type === 'touchcancel') {
                    state.first = false;
                    state.last = true;
                    gestureStateRef.current = undefined;
                    touchIdentifierRef.current = undefined;
                }

                onStateChange(state);
            }
        },
        [onStateChangeRef],
    );

    // обновляем колбек при каждом рендере, так нам не нужно будет использовать useCallback
    onStateChangeRef.current = onStateChange;

    /**
     * Управляет подписками на события
     */
    useLayoutEffect(() => {
        if (!elementRef.current) return;

        const elem = elementRef.current;

        elem.addEventListener('touchstart', handler, listenerOptions);
        elem.addEventListener('touchmove', handler, listenerOptions);
        elem.addEventListener('touchend', handler, listenerOptions);
        elem.addEventListener('touchcancel', handler, listenerOptions);

        return () => {
            elem.removeEventListener('touchstart', handler, listenerOptions);
            elem.removeEventListener('touchmove', handler, listenerOptions);
            elem.removeEventListener('touchend', handler, listenerOptions);
            elem.removeEventListener('touchcancel', handler, listenerOptions);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef, handler, elementRef.current]);
};
