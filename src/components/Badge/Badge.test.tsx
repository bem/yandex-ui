import React, { createRef } from 'react';
import { mount, render } from 'enzyme';

import { Badge } from './Badge';
import { serverEnvironmentSetup, delay } from '../../internal/utils';

describe('Badge', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Badge className="mix" content="1"><div /></Badge>)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Badge className="mix" content="1"><div /></Badge>)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Badge.displayName).toBe('Badge');
        });

        test('должен устанавливать ссылку на корневой DOM элемент', async () => {
            const innerRef = createRef<HTMLDivElement>();
            mount(<Badge innerRef={innerRef} />);
            await delay(100);
            expect(innerRef.current).not.toBe(null);
        });
    });
});
