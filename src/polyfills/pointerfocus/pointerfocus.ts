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

if (canUseDOM()) {
    let pointerFocus = null;
    if (pointerFocus === null) {
        pointerFocus = PointerFocus.create();
    }
}
