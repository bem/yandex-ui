import { CSSProperties } from 'react';
import { Modifier, ModifierArguments } from '@popperjs/core';

/**
 * Модификатор, применяющий стили на DOM-элемент при изменении расположения на странице.
 */
export const applyStyles: Modifier<'applyStyles', {}> = {
    name: 'applyStyles',
    enabled: true,
    fn: applyStylesFn,
    effect: applyStylesEffect,
    phase: 'write',
    requires: ['computeStyles'],
};

// Применяем стили напрямую на DOM-элемент в обход
// react-рендера для повышения производительности.
function applyStylesFn({ state }: ModifierArguments<{}>) {
    Object.keys(state.elements).forEach((name) => {
        const style = state.styles[name] || {};
        const attributes = state.attributes[name] || {};
        // @ts-ignore (Параметр state не является перечисляемым)
        const element = state.elements[name];

        if (!(element instanceof HTMLElement)) {
            return;
        }

        Object.assign(element.style, style);

        Object.keys(attributes).forEach((name) => {
            const value = attributes[name];
            if (value === false) {
                element.removeAttribute(name);
            } else {
                element.setAttribute(name, value === true ? '' : value);
            }
        });
    });
}

// Не используем applyStyles из popper, т.к. нам важно
// сохранять текущую позицию для завершения анимации,
// в popper происходит очистка всех стилей при закрытии.
function applyStylesEffect({ state }: ModifierArguments<{}>) {
    const initialPopperStyles: CSSProperties = {
        position: state.options.strategy,
        left: 0,
        top: 0,
        margin: 0,
    };

    Object.assign(state.elements.popper.style, initialPopperStyles);
}
