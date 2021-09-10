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

        const document = window.document;
        document.addEventListener('keydown', this.onKeyDown, true);
        document.addEventListener('mousedown', this.onPointerCall, true);
        document.addEventListener('mouseup', this.onPointerCall, true);
        document.addEventListener('focusin', this.onFocus, true);
        document.addEventListener('pointerdown', this.onPointerCall, true);
        document.addEventListener('pointerup', this.onPointerCall, true);

        if (
            !document.body.classList.contains('pointerfocus') &&
            !document.documentElement.classList.contains('pointerfocus')
        ) {
            document.body.classList.add('utilityfocus');
        }
    }

    /**
     * Удаляет все обработчики и классы с документа.
     */
    dispose(): void {
        window.removeEventListener('blur', this.onBlur, false);

        const document = window.document;
        document.removeEventListener('keydown', this.onKeyDown, true);
        document.removeEventListener('mousedown', this.onPointerCall, true);
        document.removeEventListener('mouseup', this.onPointerCall, true);
        document.removeEventListener('focusin', this.onFocus, true);
        document.removeEventListener('pointerdown', this.onPointerCall, true);
        document.removeEventListener('pointerup', this.onPointerCall, true);
        document.body.classList.remove('pointerfocus', 'utilityfocus');
    }

    private onKeyDown = () => {
        window.clearTimeout(this.timeoutId);
        this.isPointer = false;
    };

    private onPointerCall = () => {
        this.isPointer = true;
        window.clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => {
            this.isPointer = false;
        }, 600);
    };

    private onFocus = () => {
        const classList = window.document.body.classList;

        if (this.isPointer) {
            classList.add('pointerfocus');
            classList.remove('utilityfocus');
        } else {
            classList.add('utilityfocus');
            classList.remove('pointerfocus');
        }
    };

    private onBlur = () => {
        window.addEventListener('focus', this.setIsPointerOnTabFocus, true);
    };

    private setIsPointerOnTabFocus = () => {
        window.removeEventListener('focus', this.setIsPointerOnTabFocus, true);

        if (window.document.body.classList.contains('pointerfocus')) {
            this.isPointer = true;
            window.setTimeout(() => {
                this.isPointer = false;
            });
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
