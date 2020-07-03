import React, { ComponentType } from 'react';
import { mount, render } from 'enzyme';
import { ExtractProps } from '@bem-react/core';
import { Text as TextCommon } from './Text';
import { Text as TextDesktop, cnText, TextAlignValue, TextOverflowValue } from './Text@desktop';
import { Text as TextTouchPhone } from './Text@touch-phone';
import { Text as TextTouchPad } from './Text@touch-pad';
import { serverEnvironmentSetup } from '../../internal/utils';

const platforms = [['desktop', TextDesktop], ['touch-pad', TextTouchPad], ['touch-phone', TextTouchPhone]];

type TextProps = ExtractProps<typeof TextDesktop>

describe('Text@common', () => {
    describe('common environment', () => {
        test('должен быть установлен корректный displayName', () => {
            expect(TextCommon.displayName).toBe(cnText());
        });
    });
});

describe.each<any>(platforms)('Text@%s', (_platform, Text: ComponentType<TextProps>) => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Text className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<Text className="mix" />)).toMatchSnapshot();
        });

        test('должен изменять тэг элемента через as', () => {
            const tagName = 'p';
            const wrapper = mount(<Text as={tagName} />);
            expect(wrapper.find(tagName)).toHaveLength(1);
        });

        test('должен добавлять выравнивание через props', () => {
            ([
                'start',
                'end',
                'center',
                'justify',
            ] as TextAlignValue[]).forEach((align) => {
                expect(mount(<Text align={align} />).find(`.${cnText()}_align_${align}`))
                    .toHaveLength(1);
            });
        });

        test('должен управлять переполнением через props', () => {
            ([
                'ellipsis',
                'fade',
                'fade-horizontal',
            ] as TextOverflowValue[]).forEach((overflow) => {
                expect(mount(<Text overflow={overflow} />).find(`.${cnText()}_overflow_${overflow}`))
                    .toHaveLength(1);
            });
        });

        test('должен управлять цветом через props', () => {
            const color = 'primary';
            const wrapper = mount(<Text color={color} />);
            expect(wrapper.find(`.${cnText()}_color_${color}`)).toHaveLength(1);
        });
    });
});
