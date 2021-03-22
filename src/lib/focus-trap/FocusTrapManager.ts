import { getTabbables } from './tabbable';
import {
    focusElement,
    focusFirstIn,
    getActiveElement,
    getNextTabbableIndex,
    isElementInScope,
    isFocusFree,
    isGuard,
} from './utils';

export interface FocusTrapOptions {
    /**
     * Перемещает фокус на первый или автофокусируемый элемент внутри ловушки.
     *
     * @default true
     */
    autoFocus?: boolean;
}

export interface FocusTrapInstance {
    /**
     * Возвращает HTMLElement фокусируемой области.
     */
    getScope(): HTMLElement;

    /**
     * Возвращает параметры для ловушки фокуса.
     */
    getOptions(): FocusTrapOptions;
}

enum Direction {
    None = 0,
    Forward = 1,
    Backward = -1,
}

export class FocusTrapManager {
    private static manager: FocusTrapManager;

    static getInstance() {
        if (!this.manager) {
            this.manager = new FocusTrapManager();
        }

        return this.manager;
    }

    private instances: FocusTrapInstance[] = [];

    private direction: Direction = Direction.None;

    private lastActiveElement: HTMLElement | null = null;

    private raf?: number;

    private constructor() {
        this.onDocumentFocusIn = this.onDocumentFocusIn.bind(this);
        this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    activate(instance: FocusTrapInstance) {
        this.preventLastFocusIn();

        if (this.instances.length === 0) {
            this.attachEvents();
        }

        this.instances.push(instance);

        this.autoFocus(instance);
    }

    deactivate(instance: FocusTrapInstance) {
        this.preventLastFocusIn();

        this.instances = this.instances.filter((trap) => trap !== instance);

        if (this.instances.length === 0) {
            this.detachEvents();
        }
    }

    private autoFocus(instance: FocusTrapInstance) {
        const scope = instance.getScope();
        const { autoFocus } = instance.getOptions();

        const activeElement = getActiveElement();

        if (autoFocus && (!activeElement || !isElementInScope(scope, activeElement))) {
            focusFirstIn(scope);

            // Если внутри модального окна нет фокусируемого элемента,
            // то переносим фокус на модальное окно
            this.focusScope(scope);
        }
    }

    private focusScope(scope: HTMLElement) {
        const activeElement = getActiveElement();

        if (!activeElement || !isElementInScope(scope, activeElement)) {
            focusElement(scope, true);
        }
    }

    private checkFocusInCurrentScope() {
        const instance = this.instances[this.instances.length - 1];

        if (instance) {
            this.checkFocusIn(instance);
        }
    }

    private preventLastFocusIn() {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
        }
    }

    private checkFocusIn(instance: FocusTrapInstance) {
        const scope = instance.getScope();
        const { direction, lastActiveElement } = this;
        const activeElement = getActiveElement();

        this.lastActiveElement = activeElement;
        this.direction = Direction.None;

        if (!activeElement || isFocusFree() || isElementInScope(scope, activeElement)) {
            return;
        }

        const tabbables = getTabbables(scope, (node) => !isGuard(node));
        const activeIndex = tabbables.indexOf(activeElement);

        if (tabbables.length === 0) {
            this.focusScope(scope);
        } else if (activeIndex === -1) {
            const currentIndex = lastActiveElement ? tabbables.indexOf(lastActiveElement) : -1;
            const index = getNextTabbableIndex(currentIndex, tabbables.length, direction);

            focusElement(tabbables[index]);
        }
    }

    private attachEvents() {
        document.addEventListener('focusin', this.onDocumentFocusIn, true);
        document.addEventListener('keydown', this.onDocumentKeyDown, true);
        document.addEventListener('mousedown', this.onMouseDown, true);
    }

    private detachEvents() {
        document.removeEventListener('focusin', this.onDocumentFocusIn, true);
        document.removeEventListener('keydown', this.onDocumentKeyDown, true);
        document.removeEventListener('mousedown', this.onMouseDown, true);
    }

    private onDocumentFocusIn() {
        // При добавлении новой ловушки с автофокусируемым элементом, предыдущая успевает вернуть фокус обратно.
        // Из-за этого ломается автофокусировка в новой, поэтому используем `requestAnimationFrame`,
        // чтобы при добавлении ловушки, отменить действия предыдущей
        this.raf = requestAnimationFrame(() => {
            this.checkFocusInCurrentScope();
        });
    }

    private onDocumentKeyDown(event: KeyboardEvent) {
        if (event.key !== 'Tab' || event.altKey || event.ctrlKey || event.metaKey) {
            return;
        }

        this.direction = event.shiftKey ? Direction.Backward : Direction.Forward;
    }

    private onMouseDown() {
        this.direction = Direction.None;
    }
}
