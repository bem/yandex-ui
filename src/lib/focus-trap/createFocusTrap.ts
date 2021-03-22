import { FocusTrapManager, FocusTrapOptions } from './FocusTrapManager';
import { FocusTrap } from './FocusTrap';

export type FocusTrapInstance = FocusTrap;

export { FocusTrapOptions };

/**
 * Функция для создания ловушки фокуса
 */
export function createFocusTrap(scope: HTMLElement, options: FocusTrapOptions = {}) {
    const manager = FocusTrapManager.getInstance();

    return new FocusTrap(manager, scope, options);
}
