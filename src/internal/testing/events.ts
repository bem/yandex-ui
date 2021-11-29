export function installPointerEvent() {
    class FakePointerEvent extends MouseEvent implements PointerEvent {
        // eslint-disable-next-line no-undef
        private _eventInitDict: PointerEventInit;

        // eslint-disable-next-line no-undef
        constructor(type: string, eventInitDict: PointerEventInit) {
            super(type, eventInitDict);

            this._eventInitDict = eventInitDict;
        }

        get pointerId() {
            return this._eventInitDict.pointerId ?? 0;
        }

        get pointerType() {
            return this._eventInitDict.pointerType ?? 'mouse';
        }

        get isPrimary() {
            return this._eventInitDict.isPrimary ?? false;
        }

        get pressure() {
            return this._eventInitDict.pressure ?? this.buttons ? 0.5 : 0;
        }

        get height() {
            return this._eventInitDict.height ?? 0;
        }

        get width() {
            return this._eventInitDict.width ?? 0;
        }

        get tiltX() {
            return this._eventInitDict.tiltX ?? 0;
        }

        get tiltY() {
            return this._eventInitDict.tiltY ?? 0;
        }

        get tangentialPressure() {
            return this._eventInitDict.tangentialPressure ?? 0;
        }

        get twist() {
            return this._eventInitDict.twist ?? 0;
        }

        getCoalescedEvents() {
            return [];
        }

        getPredictedEvents() {
            return [];
        }
    }

    beforeAll(() => {
        // @ts-expect-error
        global.PointerEvent = FakePointerEvent;
    });

    afterAll(() => {
        // @ts-expect-error
        delete global.PointerEvent;
    });
}
