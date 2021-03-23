export interface OnClose {
    (event: KeyboardEvent, source: 'esc'): void;
    (event: MouseEvent, source: 'click'): void;
    (event: KeyboardEvent | MouseEvent, source: 'esc' | 'click'): void;
}

type RefHTMLElement = {
    readonly current: HTMLElement | null;
};

export interface OverlayOptions {
    onClose?: OnClose;
    refs: RefHTMLElement[];
}

/**
 * @internal
 */
export class OverlayManager {
    private static instance: OverlayManager;

    static getInstance() {
        if (!this.instance) {
            this.instance = new OverlayManager();
        }

        return this.instance;
    }

    private stack: OverlayOptions[] = [];

    private eventTarget: HTMLElement | null = null;

    constructor() {
        this.onDocumentKeyUp = this.onDocumentKeyUp.bind(this);
        this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    count() {
        return this.stack.length;
    }

    addOverlay(options: OverlayOptions) {
        if (this.stack.length === 0) {
            this.attachEvents();
        }

        this.stack.push(options);
    }

    removeOverlay(options: OverlayOptions) {
        this.stack.splice(this.stack.indexOf(options), 1);

        if (this.stack.length === 0) {
            this.detachEvents();
        }
    }

    getTopOverlayOptions(): OverlayOptions | undefined {
        return this.stack[this.stack.length - 1];
    }

    private isEssentionalClick(refs: RefHTMLElement[], target: HTMLElement | null) {
        return refs.some((ref) => {
            return ref.current && ref.current.contains(target);
        });
    }

    private handleClose(event: KeyboardEvent, source: 'esc'): void;
    private handleClose(event: MouseEvent, source: 'click'): void;
    private handleClose(event: KeyboardEvent | MouseEvent, source: 'esc' | 'click'): void {
        const options = this.getTopOverlayOptions();

        if (!options || options.onClose === undefined) {
            return;
        }

        if (source === 'click' && this.isEssentionalClick(options.refs, event.target as HTMLElement | null)) {
            return;
        }

        options.onClose(event, source);
    }

    private onDocumentKeyUp(event: KeyboardEvent) {
        const key = event.key;

        // @fixme: ISL-9529: keyboard.ts: использовать библиотеку для клавиатурных событий
        if (key !== 'Escape' && key !== 'Esc') {
            return;
        }

        this.handleClose(event, 'esc');
    }

    private onDocumentMouseDown(event: MouseEvent) {
        this.eventTarget = event.target as HTMLElement;
    }

    private onDocumentClick(event: MouseEvent) {
        const target = this.eventTarget;
        this.eventTarget = null;

        // Убеждаемся, что элемент, который был нажат, совпадает с последним
        // при срабатывании события mousedown. Это предотвращает закрытие диалогового окна
        // перетаскиванием курсора (например, выделением текста внутри диалогового окна
        // и отпусканием мыши за его пределами).
        if (target !== event.target) {
            return;
        }

        this.handleClose(event, 'click');
    }

    private attachEvents() {
        document.addEventListener('keyup', this.onDocumentKeyUp);
        document.addEventListener('mousedown', this.onDocumentMouseDown, true);
        document.addEventListener('click', this.onDocumentClick, true);
    }

    private detachEvents() {
        document.removeEventListener('keyup', this.onDocumentKeyUp);
        document.removeEventListener('mousedown', this.onDocumentMouseDown, true);
        document.removeEventListener('click', this.onDocumentClick, true);
    }
}
