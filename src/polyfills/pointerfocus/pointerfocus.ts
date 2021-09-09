import { canUseDOM } from '../../lib/canUseDOM';

class PointerFocus {
    private timeoutId: number;
    private isPointer: boolean;

    static create() {
        return new PointerFocus();
    }

    constructor() {
        this.timeoutId = 0;
        this.isPointer = false;

        window.addEventListener('blur', this.onBlur, false);
        window.document.addEventListener('keydown', this.onKeyDown, true);
        window.document.addEventListener('mousedown', this.onPointerCall, true);
        window.document.addEventListener('mouseup', this.onPointerCall, true);
        window.document.addEventListener('focusin', this.onFocus, true);
        window.document.addEventListener('pointerdown', this.onPointerCall, true);
        window.document.addEventListener('pointerup', this.onPointerCall, true);

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
        window.removeEventListener('blur', this.onBlur, false);
        window.document.removeEventListener('keydown', this.onKeyDown, true);
        window.document.removeEventListener('mousedown', this.onPointerCall, true);
        window.document.removeEventListener('mouseup', this.onPointerCall, true);
        window.document.removeEventListener('focusin', this.onFocus, true);
        window.document.removeEventListener('pointerdown', this.onPointerCall, true);
        window.document.removeEventListener('pointerup', this.onPointerCall, true);
        window.document.body.classList.remove('pointerfocus', 'utilityfocus');
    }

    private onKeyDown = () => {
        window.clearTimeout(this.timeoutId);
        this.isPointer = false;
    };

    private onPointerCall = () => {
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

let pointerFocusInstance: PointerFocus | null = null;
let disposed = false;

function setupPointerFocus() {
    if (disposed || pointerFocusInstance) {
        return;
    }

    pointerFocusInstance = PointerFocus.create();
}

if (canUseDOM()) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupPointerFocus);
    } else {
        // https://github.com/jquery/jquery/blob/main/src/core/ready.js#L68
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(setupPointerFocus);
    }
}

/**
 * Отключает PointerFocus на странице.
 *
 * @internal
 */
export function dispose() {
    disposed = true;
    if (pointerFocusInstance) {
        pointerFocusInstance.dispose();
    }
}
