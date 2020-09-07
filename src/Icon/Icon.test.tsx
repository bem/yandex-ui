import React from 'react';
import { mount, render } from 'enzyme';

import { Icon } from './Icon';
import { withGlyphTypeArrow as withGlyph } from './_glyph/Icon_glyph_type-arrow';
import { serverEnvironmentSetup } from '../internal/utils';

const IconGlyph = withGlyph(Icon);

describe('Icon', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<IconGlyph glyph="type-arrow" className="mix" />)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<IconGlyph glyph="type-arrow" className="mix" />)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(Icon.displayName).toBe('Icon');
        });

        test('должен подгружать картинку по url', () => {
            const url = '_type/icon_type_close.assets/close.svg';
            const wrapper = mount(<Icon url={url} />);
            expect(wrapper.find('span').prop('style')).toMatchObject({ backgroundImage: `url('${url}')` });
        });

        test('должен корректно устанавливать свойство style', () => {
            const style = { border: 'dashed #b0b0af 1px', background: '#729926' };
            const wrapper = mount(<Icon style={style} />);
            expect(wrapper.find('span').prop('style')).toBe(style);
        });
    });
});
