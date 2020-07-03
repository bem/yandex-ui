import React, { FC, RefObject } from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { withZIndex } from './withZIndex';
import { delay } from '../../internal/utils';
import { Nullable } from '../../typings/utility-types';

type TestProps = {
    zIndex?: number;
    innerRef?: RefObject<HTMLDivElement>;
};

const Test: FC<TestProps> = ({ zIndex, innerRef }) => <div style={{ zIndex: zIndex }} ref={innerRef} />;

const ZTest = withZIndex(Test);

describe('withZIndex', () => {
    let wrapper: Nullable<ReactWrapper> = null;
    let wrapper1: Nullable<ReactWrapper> = null;

    afterEach(() => {
        [wrapper, wrapper1].forEach((wrapper) => {
            wrapper && wrapper.length && wrapper.unmount();
        });
    });

    test('должен выставлять z-index', async () => {
        wrapper = mount(<ZTest visible />);

        // обновляем при следующем тике
        await delay(100);
        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '1001');
    });

    test('не должен менять z-index при visible: false', async () => {
        wrapper = mount(<ZTest visible />);
        await delay(100);

        wrapper.setProps({ visible: false });
        await delay(100);

        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '1001');
    });

    test('должен учитывать zIndexGroupLevel', async () => {
        wrapper = mount(<ZTest visible zIndexGroupLevel={3} />);

        await delay(100);
        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '4001');

        // проверяем что после повторного открытия z-index сохранился
        wrapper.setProps({ visible: false });
        await delay(100);
        wrapper.setProps({ visible: true });

        await delay(100);
        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '4001');
    });

    test('должен устанавливать правильный z-index для нескольких блоков', async () => {
        wrapper = mount(<ZTest visible />);
        wrapper1 = mount(<ZTest visible />);

        await delay(100);
        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '1001');
        expect(wrapper1.render().prop('style')).toHaveProperty('z-index', '1002');
    });

    test('должен правильно менять z-index при повторном появлении блока', async () => {
        wrapper = mount(<ZTest visible />);
        wrapper1 = mount(<ZTest visible />);

        await delay(100);
        wrapper.setProps({ visible: false });
        await delay(100);
        wrapper.setProps({ visible: true });

        await delay(100);
        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '1003');
        expect(wrapper1.render().prop('style')).toHaveProperty('z-index', '1002');
    });

    test('не должен резервировать z-index при удалении из DOM', async () => {
        wrapper = mount(<ZTest visible />);

        await delay(100);
        expect(wrapper.render().prop('style')).toHaveProperty('z-index', '1001');
        wrapper.unmount();

        wrapper1 = mount(<ZTest visible />);

        await delay(100);
        expect(wrapper1.render().prop('style')).toHaveProperty('z-index', '1001');
    });
});
