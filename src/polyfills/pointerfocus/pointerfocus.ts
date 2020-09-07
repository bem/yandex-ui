import { canUseDOM } from '../../lib/canUseDOM';
import { Nullable } from '../../typings/utility-types';

class PointerFocus {
    private timeoutId: number;
    private isPointer: boolean;

    static create() {
        return new PointerFocus();
    }

    constructor() {
        this.timeoutId = 0;
        this.isPointer = false;

        window.addEventListener('blur', this.onBlur);
        window.document.addEventListener('keydown', this.onKeyDown);
        window.document.addEventListener('mousedown', this.onMouseDown);
        window.document.addEventListener('mouseup', this.onMouseDown);
        window.document.addEventListener('focusin', this.onFocus);

        if (
            !window.document.body.classList.contains('pointerfocus') &&
            !window.document.documentElement.classList.contains('pointerfocus')
        ) {
            window.document.body.classList.add('utilityfocus');
        }
    }

    /**
     * Удаляет все обработчики и классы с документа.
     */
    dispose(): void {
        window.removeEventListener('blur', this.onBlur);
        window.document.removeEventListener('keydown', this.onKeyDown);
        window.document.removeEventListener('mousedown', this.onMouseDown);
        window.document.removeEventListener('mouseup', this.onMouseDown);
        window.document.removeEventListener('focusin', this.onFocus);
        window.document.body.classList.remove('pointerfocus', 'utilityfocus');
    }

    private onKeyDown = () => {
        window.clearTimeout(this.timeoutId);
        this.isPointer = false;
    };

    private onMouseDown = () => {
        this.isPointer = true;
        window.clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => (this.isPointer = false), 600);
    };

    private onFocus = () => {
        if (this.isPointer) {
            window.document.body.classList.add('pointerfocus');
            window.document.body.classList.remove('utilityfocus');
        } else {
            window.document.body.classList.add('utilityfocus');
            window.document.body.classList.remove('pointerfocus');
        }
    };

    private onBlur = () => {
        window.addEventListener('focus', this.setIsPointerOnTabFocus, true);
    };

    private setIsPointerOnTabFocus = () => {
        window.removeEventListener('focus', this.setIsPointerOnTabFocus, true);

        if (window.document.body.classList.contains('pointerfocus')) {
            this.isPointer = true;
            window.setTimeout(() => (this.isPointer = false));
        }
    };
}

let pointerFocus: Nullable<PointerFocus> = null;

if (canUseDOM()) {
    if (pointerFocus === null) {
        pointerFocus = PointerFocus.create();
    }
}

/**
 * Отключает PointerFocus на странице.
 *
 * @internal
 */
export function dispose() {
    if (pointerFocus) {
        pointerFocus.dispose();
    }
}
