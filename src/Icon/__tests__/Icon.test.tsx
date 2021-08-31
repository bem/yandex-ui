import React from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Icon } from '../Icon';
import { withGlyphTypeArrow as withGlyph } from '../_glyph/Icon_glyph_type-arrow';

const IconGlyph = withGlyph(Icon);

describe('Icon', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<IconGlyph glyph="type-arrow" className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(Icon.displayName).toBe('Icon');
    });

    test('должен подгружать картинку по url', () => {
        const url = '_type/icon_type_close.assets/close.svg';
        render(<Icon url={url} data-testid="icon" />);

        expect(screen.getByTestId('icon')).toHaveStyle({ backgroundImage: `url('${url}')` });
    });

    test('должен корректно устанавливать свойство style', () => {
        const style = { border: 'dashed #b0b0af 1px', background: '#729926' };
        render(<Icon style={style} data-testid="icon" />);

        expect(screen.getByTestId('icon')).toHaveStyle(style);
    });
});
