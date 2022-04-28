import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { UserPic, withCamera } from '../desktop';
import { UserPic as UserPicCommon } from '../UserPic';

const UserPicCamera = withCamera(UserPic);

describe('UserPic', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<UserPicCamera className="mix" hasCamera />);
        expect(container.firstElementChild).toMatchSnapshot();
    });

    test('должен вернуть полный шаблон компонента с ссылкой в новом окне (snapshot)', () => {
        const { container } = render(<UserPicCamera className="mix" hasCamera cameraURLTarget="_blank" />);
        expect(container.firstElementChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(UserPicCommon.displayName).toBe('UserPic');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<UserPic innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен проставить модификатор hasPlus при наличии свойства plus', () => {
        const { container } = render(<UserPic plus />);

        expect(container.firstElementChild).toHaveClass('UserPic_hasPlus');
    });

    test('должен установить верный атрибут src при наличии свойства host и avatarid', () => {
        render(<UserPic host="image-host" avatarId="avatar-id" />);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'image-host/get-yapic/avatar-id/islands-middle');
    });

    test('должен установить верный атрибут srcSet при наличии свойства host и avatarid', () => {
        render(<UserPic host="image-host" avatarId="avatar-id" />);
        expect(screen.getByRole('img')).toHaveAttribute(
            'srcSet',
            'image-host/get-yapic/avatar-id/islands-middle 1x, image-host/get-yapic/avatar-id/islands-retina-middle 2x',
        );
    });

    test('должен установить верный атрибут src при наличии свойства lodpiUrl', () => {
        render(<UserPic lodpiUrl="custom-url" />);

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'custom-url');
        expect(img).not.toHaveAttribute('srcSet');
    });

    test('должен установить верные атрибуты src и srcSet при наличии свойств lodpiUrl и hidpiUrl', () => {
        render(<UserPic lodpiUrl="custom-url-lodpi" hidpiUrl="custom-url-hidpi" />);

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'custom-url-lodpi');
        expect(img).toHaveAttribute('srcSet', 'custom-url-lodpi 1x, custom-url-hidpi 2x');
    });
});
