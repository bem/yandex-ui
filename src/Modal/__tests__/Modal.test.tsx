import React, { createRef } from 'react';

import { createClientRender } from '../../internal/testing';
import { Modal as ModalCommon } from '../Modal';
import { Modal as ModalDesktop } from '../desktop';
import { Modal as ModalTouchPad } from '../touch-phone';
import { Modal as ModalTouchPhone } from '../touch-pad';

const platforms = [
    ['desktop', ModalDesktop],
    ['touch-pad', ModalTouchPad],
    ['touch-phone', ModalTouchPhone],
] as const;

describe.each(platforms)('Modal@%s', (_platform, Modal) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Modal visible className="mix" scope="inplace">
                content
            </Modal>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Modal visible innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен быть установлен корректный displayName', () => {
        expect(ModalCommon.displayName).toBe('Modal');
    });
});
