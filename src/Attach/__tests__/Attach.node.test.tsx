/**
 * @jest-environment node
 */
import React from 'react';
import { withRegistry, Registry } from '@bem-react/di';

import { createServerRender } from '../../internal/testing';
import { cnAttach } from '../Attach';
import { Attach as AttachDesktop } from '../desktop';
import { Attach as AttachTouchPad } from '../touch-pad';
import { Attach as AttachTouchPhone } from '../touch-phone';
import { Button as ButtonDesktop } from '../../Button/desktop';
import { Button as ButtonTouchPad } from '../../Button/touch-pad';
import { Button as ButtonTouchPhone } from '../../Button/touch-phone';

const attachDesktopRegistry = new Registry({ id: cnAttach() });
const attachTouchPadRegistry = new Registry({ id: cnAttach() });
const attachTouchPhoneRegistry = new Registry({ id: cnAttach() });

attachDesktopRegistry.set('Button', ButtonDesktop);
attachTouchPadRegistry.set('Button', ButtonTouchPad);
attachTouchPhoneRegistry.set('Button', ButtonTouchPhone);

const platforms = [
    ['desktop', withRegistry(attachDesktopRegistry)(AttachDesktop)],
    ['touch-pad', withRegistry(attachTouchPadRegistry)(AttachTouchPad)],
    ['touch-phone', withRegistry(attachTouchPhoneRegistry)(AttachTouchPhone)],
] as const;

describe.each(platforms)('Attach@%s (ssr)', (_platform, Attach) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Attach hasHolder holderText="файл не выбран" id="100500" className="mix">
                    Выбрать файл
                </Attach>,
            );
        }).not.toThrowError();
    });
});
