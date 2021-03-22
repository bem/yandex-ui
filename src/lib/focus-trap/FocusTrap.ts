import { FocusTrapInstance, FocusTrapManager, FocusTrapOptions } from './FocusTrapManager';
import { createGuard, removeElementFromDocument } from './utils';

export class FocusTrap implements FocusTrapInstance {
    private manager: FocusTrapManager;

    private options: FocusTrapOptions = {
        autoFocus: true,
    };

    private scope: HTMLElement;

    private active = false;

    private cleanupFns: Array<() => void> = [];

    constructor(manager: FocusTrapManager, scope: HTMLElement, options: FocusTrapOptions = {}) {
        this.manager = manager;
        this.scope = scope;

        this.setOptions(options);
    }

    /**
     * Возвращает HTMLElement фокусируемой области.
     */
    getScope() {
        return this.scope;
    }

    /**
     * Активирует ловушку фокуса
     */
    activate() {
        if (this.active) {
            return;
        }
        this.active = true;

        this.attachGuards();
        this.activateInManager();
    }

    /**
     * Деактивирует ловушку фокуса
     */
    deactivate() {
        if (!this.active) {
            return;
        }
        this.active = false;

        this.cleanupFns.forEach((fn) => fn());
        this.cleanupFns = [];
    }

    /**
     * Возвращает параметры для ловушки фокуса.
     */
    getOptions() {
        return this.options;
    }

    /**
     * Устанавливает параметры для ловушки фокуса
     */
    setOptions(options: FocusTrapOptions) {
        this.options = {
            ...this.options,
            ...options,
        };
    }

    private attachGuards() {
        const beforeElement = createGuard(1);
        const afterElement = createGuard(0);

        this.scope.insertAdjacentElement('beforebegin', beforeElement);
        this.scope.insertAdjacentElement('afterend', afterElement);

        this.cleanupFns.push(() => {
            removeElementFromDocument(beforeElement);
            removeElementFromDocument(afterElement);
        });
    }

    private activateInManager() {
        this.manager.activate(this);

        this.cleanupFns.push(() => {
            this.manager.deactivate(this);
        });
    }
}
