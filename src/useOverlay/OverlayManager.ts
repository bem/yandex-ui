import { VirtualElement } from '../usePopper';

export type OnClose = (event: KeyboardEvent | MouseEvent, source: 'esc' | 'click') => void;

export type CloseStrategy = 'pressdown' | 'pressup';

type RefHTMLElement = {
    readonly current: VirtualElement | HTMLElement | null;
};

export interface OverlayOptions {
    onClose?: OnClose;
    refs: RefHTMLElement[];
    closeStrategy: CloseStrategy;
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

    private overlays: OverlayOptions[] = [];

    private eventTarget: HTMLElement | null = null;

    private activeOverlay?: OverlayOptions | null;

    constructor() {
        this.onDocumentKeyUp = this.onDocumentKeyUp.bind(this);
        this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    count() {
        return this.overlays.length;
    }

    addOverlay(options: OverlayOptions) {
        if (this.overlays.length === 0) {
            this.attachEvents();
        }

        this.overlays.push(options);
    }

    removeOverlay(options: OverlayOptions) {
        this.overlays.splice(this.overlays.indexOf(options), 1);

        if (this.overlays.length === 0) {
            this.detachEvents();
        }
    }

    getTopOverlayOptions(): OverlayOptions | undefined {
        return this.overlays[this.overlays.length - 1];
    }

    private isEssentionalClick(refs: RefHTMLElement[], target: HTMLElement | null) {
        return refs.some((ref) => {
            return ref.current instanceof HTMLElement && ref.current.contains(target);
        });
    }

    private handleClose(event: KeyboardEvent | MouseEvent, source: 'esc' | 'click', strategy?: CloseStrategy): void {
        const options = this.getTopOverlayOptions();

        if (!options || !options.onClose || (strategy && strategy !== options.closeStrategy)) {
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
        this.activeOverlay = this.getTopOverlayOptions();

        this.handleClose(event, 'click', 'pressdown');
    }

    private onDocumentClick(event: MouseEvent) {
        const target = this.eventTarget;
        this.eventTarget = null;

        const activeOverlay = this.activeOverlay;
        this.activeOverlay = null;

        if (event.button > 0) {
            return;
        }

        // Проверяем, что слой тот же, что при `mousedown`,
        // иначе можем закрыть 2 слоя за одно нажатие
        if (activeOverlay !== this.getTopOverlayOptions()) {
            return;
        }

        // Убеждаемся, что элемент, который был нажат, совпадает с последним
        // при срабатывании события mousedown. Это предотвращает закрытие диалогового окна
        // перетаскиванием курсора (например, выделением текста внутри диалогового окна
        // и отпусканием мыши за его пределами).
        if (target !== event.target) {
            return;
        }

        this.handleClose(event, 'click', 'pressup');
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
