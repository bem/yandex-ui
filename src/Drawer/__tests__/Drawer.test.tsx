import React, { createRef } from 'react';

import { delay } from '../../internal/utils';
import { createClientRender } from '../../internal/testing';
import { Drawer } from '../touch-phone/bundle';

describe('Drawer', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', async () => {
        const { container } = render(
            <Drawer visible animation={{ tension: 230, friction: 24, disabled: true }} scope="inplace">
                <p>Phasellus sollicitudin in pellentesque cras sagittis platea mat</p>
            </Drawer>,
        );

        await delay(100);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Drawer visible innerRef={innerRef} animation={{ tension: 230, friction: 24, disabled: true }} />);

        await delay(100);

        expect(innerRef.current).not.toBe(null);
    });
});
