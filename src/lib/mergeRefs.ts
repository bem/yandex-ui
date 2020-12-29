import { RefObject, MutableRefObject, Ref } from 'react';

import { Maybe } from '../typings/utility-types';
import { canUseDOM } from './canUseDOM';

/**
 * Копирует ссылку на DOM элемент из одного объекта в другой и возвращает объект со ссылкой.
 *
 * @param source Объект содержащий DOM элемент
 * @param target Объект куда необходимо скопировать DOM элемент
 */
export const mergeRefs = <TElement extends HTMLElement>(
    source?: RefObject<HTMLElement>,
    ...targets: Maybe<Ref<HTMLElement>>[]
) => {
    // Используем raf, т.к. ссылки устанавливаются асинхронно.
    if (canUseDOM()) {
        requestAnimationFrame(() => {
            targets.forEach((target) => {
                if (source !== undefined && target !== undefined) {
                    if (typeof target === 'function') {
                        target(source.current);
                    } else {
                        (target as MutableRefObject<any>).current = source.current;
                    }
                }
            });
        });
    }
    return source as RefObject<TElement>;
};

// TODO(ISL-8110): @yandex-lego/components: Поддержать callback для innerRef
// Перейти на эту функцию
export function mergeAllRefs<TElement extends HTMLElement>(...refs: Maybe<Ref<TElement>>[]) {
    return (node: TElement | null) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref !== null && ref !== undefined) {
                (ref as MutableRefObject<TElement | null>).current = node;
            }
        });
    };
}
